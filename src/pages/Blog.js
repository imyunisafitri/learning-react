import React, { useState, useEffect } from "react";
import BlogList from "../component/BlogList";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="blog">
      <h1>Recently Blog</h1>
      {blogs.map((blog) => (
        <BlogList key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blog;
