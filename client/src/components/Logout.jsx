import { useState, useEffect, useContext } from "react";
import { BlogContext } from "./Root.jsx";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { user, setUser } = useContext(BlogContext);
  const [logged, setLogged] = useState(null);

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("accessToken");
    setUser(null);
    setLogged(null);
    navigate("/");
  }

  return <button onClick={handleLogout}>Log out</button>;
}

export default Logout;
