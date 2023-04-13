import { useState, useEffect } from "react";
import SkeletonElement from "../skeletons/SkeletonElement";

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    // delay the fetching of data to show the skeleton
    setTimeout(async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await result.json();
      setArticles(data);
    }, 5000);
  });

  return (
    <div className="article">
      <h2>Article Details</h2>

      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
      <SkeletonElement type="thumbnail" />
      <SkeletonElement type="avatar" />

      {articles && (
        <div className="articles">
          {articles.map((article) => (
            <div className="article" key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </div>
          ))}
        </div>
      )}

      {!articles && (
        <div className="skeleton">
          loading...
          {/* <div className="skeleton-avatar"></div>
          <div className="skeleton-author"></div>
          <div className="skeleton-details"></div> */}
        </div>
      )}
    </div>
  );
};

export default Articles;
