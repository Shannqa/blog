import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
function Posts() {
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((json) => {
        setAllPosts(json);
        console.log(json);
      })
      .catch((err) => console.log("Error fetching posts", err));
  }, []);

  if (allPosts) {
    return (
      <div>
        {allPosts.map((post) => {
          return (
            <div key={post._id} className={styles.post}>
              <h3>
                <Link to={"/posts/" + post._id}>{post.title}</Link>
              </h3>
              <p>{post.content}</p>
              <p>{post.date_formatted}</p>
              <p>Author: {post.author ? post.author.username : "none"}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <p>There are no posts</p>;
  }
}

export default Posts;
