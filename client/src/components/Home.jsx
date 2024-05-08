import { useState, useEffect, useContext } from "react";
import { AppContext } from "./Root.jsx";
import Login from "./Login";
import Posts from "./Posts.jsx";
import styles from "../styles/Home.module.css";

function Home() {
  const { user, setUser } = useContext(AppContext);

  return (
    <div className="main">
      <Posts />
    </div>
  );
}

export default Home;
