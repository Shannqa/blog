import { useState, useEffect, useContext } from "react";
import { BlogContext } from "./Root.jsx";
import Login from "./Login";
import Posts from "./Posts.jsx";
import styles from "../styles/Home.module.css";

function Home() {
  const { user, setUser } = useContext(BlogContext);

  return (
    <div className={styles.home}>
      <Posts />
    </div>
  );
}

export default Home;
