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
  const [alertError, setAlertError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await loginUser({ email, password });

    if (response.statusCode == 200) {
      
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('Name', response.data.name);
      history.push("/");

    } else if (response.statusCode == 401) {
      setAlertError(response.message);
    } else if (response.statusCode == 403) {
      setAlertError(response.message);
    } else if (response.statusCode == 400) {
      setAlertError(response.message);
    }
  };

  return (
    <div className="login">
      <h1>Log In</h1>

      {/* Below line can also be written as =>     {errorSet != '' && <h1>{errorSet}</h1>} */}
      
      {alertError != '' ? <h3 style={{color: "red"}}> {alertError} </h3> : <h5></h5> }      

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

      <Link to = '/signup'>
        <h5 style={{ textDecoration: 'none' }}> Click here to Signup if you don't have an Account</h5>
      </Link>

    </div>
  );
}
