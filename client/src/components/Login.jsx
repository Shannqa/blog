import { useState, useEffect } from "react"

function Login() {
  const [data, setData] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")

useEffect(() => {
  fetch("/api")
  .then(res => res.json())
  .then(json => setData(json.message))
}, []);

function handleSubmit(e) {
  e.preventDefault();

  fetch("/api/log", {
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
}

  return(
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="username">Username</label>
      <input id="username" name="username" onChange={(e) => setUsername(e.target.value)} />
      <label htmlFor="password">Password</label>
      <input id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Submit</button>
      <p>{data}</p>
    </form>

  )
}

export default Login