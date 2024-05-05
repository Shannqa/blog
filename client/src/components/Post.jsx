import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../styles/Post.module.css";
import EditPost from "./EditPost";
import DeletePost from "./DeletePost";
import Tooltip from "./Tooltip";

function Posts() {
  const [post, setPost] = useState(null);
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

  if (post) {
    return (
      <div>
        <div key={post._id} className={styles.post}>
          <h3>
            <Link to={"/posts/" + post._id}>{post.title}</Link>
          </h3>
          <p>{post.content}</p>
          <p>{post.date_formatted}</p>
          <p>Author: {post.author ? post.author.username : "none"}</p>
          <h4>Admin actions</h4>
          <div className="buttons-container">
            <Link to="./edit" className="button">
              Edit post
            </Link>
            <DeletePost />
          </div>
        </div>
      </div>
    );
  } else {
    return <p>There are no posts</p>;
  }
}

export default Posts;
