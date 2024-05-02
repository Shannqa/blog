import { useState, useEffect, useContext } from "react";
import { BlogContext } from "./Root.jsx";
import Login from "./Login";

function Home() {
  const { user, setUser } = useContext(BlogContext);

  return (
    <div className="home">
      <p>Home</p>
    </div>
  );
}

export default Home;
