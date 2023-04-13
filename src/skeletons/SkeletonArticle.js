import SkeletonElement from "./SkeletonElement";
import "./skeleton.css";

const SkeletonArticle = ({ theme }) => {
  const themeClass = theme || "light";

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-article">
        <SkeletonElement type={"title"} />
        <SkeletonElement type={"text"} />
        <SkeletonElement type={"text"} />
        <SkeletonElement type={"text"} />
      </div>
    </div>
  );
};

export default SkeletonArticle;
