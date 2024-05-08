import { useState, useEffect, useContext } from "react";
import { AppContext } from "./Root.jsx";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/ErrorModal.module.css";

function ErrorModal() {
  const { user, setUser, token, setToken, error, setError } =
    useContext(AppContext);
  let errorsToDisplay;

  if (Array.isArray(error)) {
    errorsToDisplay = error.map((err, index) => <p key={index}>{err}</p>);
  } else {
    errorsToDisplay = error;
  }

  function handleClick() {
    setError(null);
  }

  return (
    <div className={styles.error}>
      <div>{errorsToDisplay}</div>
      <button onClick={handleClick}>OK</button>
    </div>
  );
}

export default ErrorModal;
