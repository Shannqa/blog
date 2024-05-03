import { useState, useEffect, useContext } from "react";
import { BlogContext } from "./Root.jsx";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Header.module.css";

function DeletePostPage() {
  const { user, setUser, token, setToken } = useContext(BlogContext);
  const [logged, setLogged] = useState(null);

  const navigate = useNavigate();

  function handleEdit() {
    localStorage.removeItem("accessToken");
    setUser(null);
    setLogged(null);
    navigate("/");
  }

  return (
    <div className={styles.button} onClick={handleEdit}>
      Edit post
    </div>
  );
}

export default DeletePostPage;
