import { useState, useEffect, createContext, useReducer } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
// import "../styles/main.css";

export const Context = createContext({
//
});


function Root() {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  
    if (error) {
    return(<p>A network error has occured!</p>)
  }
  if (loading) {
    return(<p>Loading....</p>)
  }
  

  return(
    <Context.Provider value={{
    }}>
      <div className="root">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Context.Provider>
  )
}

export default Root






