import { useState, useEffect, createContext, useReducer } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
// import "../styles/main.css";

export const BlogContext = createContext({
  user: "",
  setUser: () => {}
});


function Root() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  

  useEffect(() => {
    const hasToken = localStorage.getItem("accessToken")
    if (hasToken) {
      console.log("log")
      fetch("/api/auth/check", {
        method: "POST",
        headers: {
          Accept: "application/json",
          authorization: hasToken
        }
      })
      .then(res => res.json())
      .then(body => {
        if (body.success) {
          setUser(body.user)
          setLogged(true)
        } else {
          setLogged(false);
        }
      })
      .catch(err => console.log("token err"))
    } else {
      console.log("not log");
    }
  })

    if (error) {
    return(<p>A network error has occured!</p>)
  }
  if (loading) {
    return(<p>Loading....</p>)
  }
  

  return(
    <BlogContext.Provider value={{
      user,
      setUser
    }}>
      <div className="root">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </BlogContext.Provider>
  )
}

export default Root






