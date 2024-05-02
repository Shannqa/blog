import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { BlogContext } from "./Root.jsx";

function AddPost() {
  const { user, setUser, token, setToken } = useContext(BlogContext);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("/api/posts/" + id)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setPost(json);
  //       console.log(json);
  //     })
  //     .catch((err) => console.log("Error fetching posts", err));
  // }, []);

  // if (post) {
  console.log(token);
  console.log(user);
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
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">Content:</label>
        <input
          id="content"
          name="content"
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default AddPost;
