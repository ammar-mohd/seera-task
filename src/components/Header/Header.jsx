const Header = ({ children, classes }) => {
  return (
    <h1 className={`truncate text-center my-10 font-mono text-2xl ${classes}`}>
      {children}
    </h1>
  );
};

export default Header;
