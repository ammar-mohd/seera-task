import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

const NoResultsRenderer = () => {
  return (
    <span className="text-center font-mono text-3xl text-red-600 flex flex-col items-center mt-10">
      <ReportGmailerrorredIcon
        style={{ fontSize: "100px" }}
        data-testid="error-icon"
      />
      <p className="mt-4">No Result Found!</p>
    </span>
  );
};

export default NoResultsRenderer;
