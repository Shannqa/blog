import { useState, useEffect, useContext } from "react";
import { BlogContext } from "./Root.jsx";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/Header.module.css";

function DeletePost() {
  const { user, setUser, token, setToken } = useContext(BlogContext);
  const [resMessage, setResMessage] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  function handleDelete(e) {
    e.preventDefault();
    fetch(`/api/posts/${id}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.msg === "success") {
          setResMessage("Post deleted.");
          navigate("/");
        } else {
          let errors;
          if (json.errors) {
            errors = json.errors.map((err) => err.msg);
            console.log(errors);
          }
          errors.unshift("Something went wrong! Post not deleted.");
          setError(errors);
        }
      })
      .catch((err) => {
        setError("Something went wrong! Post not deleted.");
        console.log(err);
      });
  }

  return (
    <div className="button" onClick={handleDelete}>
      Delete post
    </div>
  );
}

export default DeletePost;
