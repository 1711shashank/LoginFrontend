import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

async function loginUser(credentials) {
  try {
    let response = await fetch('http://localhost:3000/login', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(credentials)
    });

    response = await response.json();
    console.log(response.message);
    return response;

  }
  catch(err) {
    console.error('Error:', err);
  }

}

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await loginUser({ email, password });

    if (response.statusCode == 200) {
      history.push("/dashboard");
    } else if (response.statusCode == 401) {
      history.push("/dashboard");
    } else if (response.statusCode == 403) {
      history.push("/dashboard");
    } else if (response.statusCode == 400) {
      history.push("/dashboard");
    }
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit"> LogIn </button>
        </div>
      </form>

      <Link to = '/forgetPassword'>
        <button type="submit" > Forget Password </button>
      </Link>

      

    </div>
  );
}
