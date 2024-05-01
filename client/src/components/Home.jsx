import { useState, useEffect, useContext } from "react";
import { BlogContext } from "./Root.jsx";
import Login from "./Login"
import LoggedIn from "./LoggedIn"

function Home() {
  const { user, setUser } = useContext(BlogContext);

  return(
    <div className="home">
      <p>Home</p>
      { user ? <LoggedIn /> : <Login />}
    </div>
    )
}

export default Home