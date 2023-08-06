import "./Skeleton.scss";

const Skeleton = ({ w, h }) => {
  return (
    <div
      className="skeleton"
      style={{ width: `${w}px`, height: `${h}px` }}
    ></div>
  );
};
export default Skeleton;
