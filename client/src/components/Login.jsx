import { useState, useEffect, useContext } from "react";
import { BlogContext } from "./Root.jsx";

function Login() {
  const { user, setUser } = useContext(BlogContext);
  const [data, setData] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const [logged, setLogged] = useState(null);

useEffect(() => {
  fetch("/api")
  .then(res => res.json())
  .then(json => setData(json.message))
}, []);

function handleSubmit(e) {
  e.preventDefault();

  fetch("/api/auth/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(res => res.json())
  .then(body => {
    if (body.success) {
      setUser(body.user.username)
      setLogged(true)
    } else {
      setLogged(false);
    }
  })
}

  return(
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="username">Username</label>
      <input id="username" name="username" onChange={(e) => setUsername(e.target.value)} />
      <label htmlFor="password">Password</label>
      <input id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Submit</button>
      <p>{data}</p>
      <p>{logged ? "yay" : "nay"}</p>
    </form>

  )
}

export default Login