import { useState, useEffect, useContext } from "react";
import { BlogContext } from "./Root.jsx";
import Login from "./Login";
import Posts from "./Posts.jsx";

function Home() {
  const { user, setUser } = useContext(BlogContext);

  return (
    <div className="home">
      <p>Home</p>
      <Posts />
    </div>
  );
}

export default Home;
