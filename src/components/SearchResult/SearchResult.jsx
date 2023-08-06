import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "../Skeleton/Skeleton";
import { SearchType } from "@/services/searchManagement";
import { getItemsFromSearchManagement } from "@/utils/searchUtils";
import UsersRenderer from "./UsersRenderer";
import RepositoriesRenderer from "./RepositoriesRenderer";
import NoResultsRenderer from "./NoResultsRenderer";
import InitialMessageRenderer from "./InitialMessageRenderer";
import "./SearchResult.scss";

const SearchResult = observer(({ search }) => {
  const { searchResults, type, loading, itemsNum, query } = search;

  // Use the utility function to extract items from searchResultByType
  const items = getItemsFromSearchManagement(searchResults, type);

  // Effect hook to reset the search result and page number when query or type changes
  useEffect(() => {
    search.setSearchResultToDefault();
    search.resetPageNum();
  }, [search, query, type]);

  // Function to load more results when InfiniteScroll triggers it
  const fetchMore = () => {
    search.fetchResponse();
  };

  // Render skeleton loaders for initial load
  if (loading && items.length === 0) {
    return (
      <div className="flex justify-center mt-[70px]">
        {type === SearchType.users ? (
          <div className="flex gap-3">
            {Array.from({ length: 3 }, () => 1).map((_, i) => (
              <Skeleton key={i} w={300} h={200} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {Array.from({ length: 3 }, () => 1).map((_, i) => (
              <Skeleton key={i} w={800} h={200} />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (!loading && !query) {
    return <InitialMessageRenderer />;
  }

  if (items?.length === 0) {
    return <NoResultsRenderer />;
  }

  return (
    <div className="flex justify-center mt-[70px]">
      <InfiniteScroll
        dataLength={items?.length || 0}
        next={fetchMore}
        hasMore={items?.length < itemsNum}
        loader={
          type === SearchType.users ? (
            <div className="mt-4">
              <Skeleton w={930} h={200} />
            </div>
          ) : (
            <div className="mt-4 m-auto">
              <Skeleton w={500} h={200} />
            </div>
          )
        }
      >
        {type === SearchType.users ? (
          <UsersRenderer items={items} />
        ) : (
          <RepositoriesRenderer items={items} />
        )}
      </InfiniteScroll>
    </div>
  );
});

export default SearchResult;
