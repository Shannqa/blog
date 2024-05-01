import { useState, useEffect, useContext } from "react";
import { BlogContext } from "./Root.jsx";

function LoggedIn() {
  const { user, setUser } = useContext(BlogContext);

  return(
    <p>Hello, {user}</p>
  )
}
export default LoggedIn