import { useState, useEffect, useContext } from "react";
import { AppContext } from "./Root.jsx";
import { useNavigate, Link } from "react-router-dom";

function EditPost() {
  const { user, setUser, token, setToken } = useContext(AppContext);
  const [logged, setLogged] = useState(null);

  return (
    <Link to="./edit" className="button">
      Edit post
    </Link>
  );
}

export default EditPost;
