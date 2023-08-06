"use client";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState, useMemo, memo } from "react";
import { octokit } from "@/services/searchManagement";
import { formatDate } from "@/utils/formatDate";
import Skeleton from "@/components/Skeleton/Skeleton";
import CustomModal from "@/components/CustomModal/CustomModal";

const RepositoryCard = ({ repo }) => {
  const [repoForkUsers, setRepoForkUsers] = useState([]);
  const [repoLang, setRepoLang] = useState([]);
  const [isFetchAPILoading, setIsFetchAPILoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchForksAndLanguages = async () => {
      setIsFetchAPILoading(true);
      try {
        // Fetch data for forks and languages using Octokit API client
        const [forksResponse, languagesResponse] = await Promise.all([
          octokit.request(`${repo.forks_url}?per_page=3&sort=newest`),
          octokit.request(`${repo.languages_url}`),
        ]);

        const repoForkUsersData =
          forksResponse?.data?.map((repo) => repo.owner) || [];
        const repoLangData = Object.keys(languagesResponse?.data || {});

        setRepoForkUsers(repoForkUsersData);
        setRepoLang(repoLangData);
        setIsFetchAPILoading(false);
      } catch (error) {
        console.error("Error fetching forks and languages:", error);
      }
    };

    fetchForksAndLanguages();
  }, [repo.forks_url, repo.languages_url]);

  const handleForkUserClick = async (i) => {
    try {
      const response = await fetch(repoForkUsers[i].repos_url);
      const data = await response.json();

      // Filter the data to find a specific repository that matches the name of the current repository (repo)
      const APIDate = data.filter((d) => d.name === repo.name);

      // Check if the repository link (html_url) is not available
      if (!APIDate[0]?.html_url) {
        // If the repository link is not available, show an error message using a modal
        handleOpenModal();
        return;
      }

      window.open(APIDate[0]?.html_url, "_blank");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Memoized formatted date to improve performance
  const formattedDate = useMemo(
    () => formatDate(repo.created_at),
    [repo.created_at]
  );

  return (
    <>
      <Card className="shadow-md rounded-xl max-w-[600px] min-h-[200px] flex bg-slate-50 relative">
        <CardContent className="flex justify-center flex-col w-[500px]">
          <div className="flex gap-3 mb-3 items-center ">
            <Avatar
              src="https://www.svgrepo.com/show/303548/git-icon-logo.svg"
              alt={"name"}
              sx={{ width: 40, height: 40 }}
            />

            <Typography className="truncate" variant="h5">
              {repo.name}
            </Typography>
          </div>

          {repo.language && (
            <Typography variant="body2" className="w-[500px] mb-3">
              Language: {repo.language}
            </Typography>
          )}

          {repo.description && (
            <Typography className="line-clamp-3 w-[500px] mb-3" variant="body2">
              Created At: {formattedDate}
            </Typography>
          )}

          {/* Display fork users if any */}
          {repoForkUsers.length > 0 && (
            <div className="mt-3 absolute right-2 flex flex-col justify-center items-center">
              <p>Users forked</p>
              {repoForkUsers.map((fork, index) =>
                isFetchAPILoading ? (
                  <>
                    <Skeleton w={70} h={5} />
                  </>
                ) : (
                  <>
                    <div onClick={() => handleForkUserClick(index)}>
                      <Chip
                        className="m-1"
                        key={index}
                        label={fork.login}
                        avatar={<Avatar alt="Natacha" src={fork.avatar_url} />}
                        variant="outlined"
                      />
                    </div>
                  </>
                )
              )}
            </div>
          )}

          {/* Display repository languages */}
          <Grid
            container
            justifyContent="flex-start"
            style={{
              width: "350px",
            }}
            spacing={1}
          >
            {repoLang.map((lang, i) =>
              isFetchAPILoading ? (
                <>
                  <Skeleton w={70} h={5} />
                </>
              ) : (
                <Grid key={i} item>
                  <Chip
                    label={lang}
                    color="default"
                    style={{ background: "#052d40", color: "white" }}
                  />
                </Grid>
              )
            )}
          </Grid>
        </CardContent>
      </Card>
      <CustomModal open={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-4xl text-black text-bold mb-4">Error</h2>
        <p className="text-md text-red-800 mb-10 text-center">
          Apologies, but it appears there is a problem accessing the user`s
          forked repository at the moment. Please try using a different user
          account to observe the behavior. Thank you for your understanding!
        </p>
        <Button
          variant="outlined"
          onClick={handleCloseModal}
          className="bg-red-800 text-white border-none hover:text-white hover:bg-red-600 hover:border-none"
        >
          Close Modal
        </Button>
      </CustomModal>
    </>
  );
};

// Memoize the RepositoryCard component for performance optimization
export default memo(RepositoryCard);
