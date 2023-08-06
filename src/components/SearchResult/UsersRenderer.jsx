import UsersCard from "./UsersCard/UsersCard";

const UsersRenderer = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
      {items?.map((user, i) => (
        <UsersCard key={i} user={user} />
      ))}
    </div>
  );
};

export default UsersRenderer;
