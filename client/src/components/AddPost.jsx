import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { BlogContext } from "./Root.jsx";
import styles from "../styles/AddPost.module.css";

function AddPost() {
  const { user, setUser, token, setToken } = useContext(BlogContext);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        title: title,
        content: content,
        token: token,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setTitle("");
          setContent("");
        } else {
          setError("Something went wrong! Post not saved.");
        }
      });
  }

  return (
    <div>
      <form className={styles.addPost} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          onChange={(e) => setContent(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default AddPost;
