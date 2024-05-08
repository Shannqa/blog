import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
function Posts() {
  const [allPosts, setAllPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((json) => {
        setAllPosts(json);
        setLoading(false);
        console.log(json);
      })
      .catch((err) => console.log("Error fetching posts", err));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className={styles.allPosts}>
        {allPosts ? (
          allPosts.map((post) => (
            <div key={post._id} className={styles.post}>
              <h3>
                <Link to={"/posts/" + post._id}>{post.title}</Link>
              </h3>
              <p>{post.content}</p>
              <p>{post.date_formatted}</p>
              <p>Author: {post.author ? post.author.username : "none"}</p>
            </div>
          ))
        ) : (
          <p>There are no posts yet.</p>
        )}
      </div>
    );
  }
}

export default Posts;
