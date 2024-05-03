import { useState, useEffect, useContext } from "react";
import { BlogContext } from "./Root.jsx";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/PostEditor.module.css";
import Tooltip from "./Tooltip.jsx";

function EditPostPage() {
  const { user, setUser, token, setToken, error, setError } =
    useContext(BlogContext);
  const [post, setPost] = useState(null);
  const [resMessage, setResMessage] = useState(null);

  const navigate = useNavigate();

  const id = useParams().id;

  useEffect(() => {
    fetch("/api/posts/" + id)
      .then((res) => res.json())
      .then((json) => {
        setPost(json);
        console.log(json);
      })
      .catch((err) => console.log("Error fetching posts", err));
  }, []);

  function contentHandler(e) {
    setPost({
      ...post,
      content: e.target.value,
    });
  }

  function titleHandler(e) {
    setPost({
      ...post,
      title: e.target.value,
    });
  }

  function handleSave(e) {
    e.preventDefault();

    fetch(`/api/posts/${id}/edit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        id: post._id,
        title: post.title,
        content: post.content,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setResMessage("Post saved.");
        } else {
          let errors;
          if (json.errors) {
            errors = json.errors.map((err) => err.msg);
            console.log(errors);
          }
          errors.unshift("Something went wrong! Post not saved.");
          setError(errors);
        }
      })
      .catch((err) => {
        setError("Something went wrong! Post not saved.");
        console.log(err);
      });
  }

  function handleCancel() {
    navigate("/posts/" + id);
  }

  if (post) {
    return (
      <form>
        <label htmlFor="title">Title:</label>
        <input value={post.title} onChange={(e) => titleHandler(e)} />
        <label htmlFor="content">Content:</label>
        <textarea
          value={post.content}
          onChange={(e) => contentHandler(e)}
        ></textarea>
        <p>Date: {post.date_formatted}</p>
        <p>Author: {post.author ? post.author.username : "none"}</p>
        <div className={styles.buttons}>
          <button onClick={(e) => handleSave(e)}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    );
  } else {
    return <p>Error loading post.</p>;
  }
}

export default EditPostPage;
