import RepositoryCard from "./RepositoryCard/RepositoryCard";

const RepositoriesRenderer = ({ items }) => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-4  mb-10"
      data-testid="repositories-renderer"
    >
      {items?.map((repo, i) => (
        <RepositoryCard key={i} repo={repo} />
      ))}
    </div>
  );
};

export default RepositoriesRenderer;
