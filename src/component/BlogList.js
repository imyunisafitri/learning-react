import React from "react";

const BlogList = ({ blog }) => {
  const { author, body, title } = blog;
  return (
    <div className="blog-list">
      <h4>{author}</h4>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default BlogList;
