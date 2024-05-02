import { useState, useEffect, createContext, useReducer } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "../styles/main.css";

export const BlogContext = createContext({
  user: "",
  setUser: () => {},
  token: "",
  setToken: () => {},
});

function Root() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [token, setToken] = useState(null);

  // verify token on refresh
  useEffect(() => {
    const storageToken = localStorage.getItem("accessToken");
    if (storageToken) {
      fetch("/api/auth/check", {
        method: "POST",
        headers: {
          Accept: "application/json",
          authorization: storageToken,
        },
      })
        .then((res) => res.json())
        .then((body) => {
          if (body.success) {
            setUser(body.user);
            setToken(storageToken);
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log("not log");
    }
  }, []);

  if (error) {
    return <p>A network error has occured!</p>;
  }
  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <BlogContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
      }}
    >
      <div className="root">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </BlogContext.Provider>
  );
}

export default Root;
