import { useState } from "react";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Admin");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch("/data/db.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new Blog added");
    });
  };
  return (
    <div className="create">
      <h1>Add New Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Blog titile</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Blog Body</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Blog Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default NewBlog;
