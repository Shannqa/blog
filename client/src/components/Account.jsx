import { useState, useEffect, useContext } from "react";
import { BlogContext } from "./Root.jsx";
import Logout from "./Logout.jsx";

function Account() {
  const { user, setUser } = useContext(BlogContext);

  // add a post

  return (
    <div>
      <p>Hello, {user}</p>

      <Logout />
    </div>
  );
}
export default Account;
