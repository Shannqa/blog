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






