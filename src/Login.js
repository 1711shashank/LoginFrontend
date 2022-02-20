import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PropTypes from 'prop-types';

import Dashboard from "./Dashboard";



async function loginUser(credentials) {
  return fetch('http://localhost:3000/login', {

    headers: { 'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify(credentials)

  }).then(response => response.json())
    .then(result => {
      console.log(result.message);

      if(result.message ==="LogIn Successfully"){
        console.log(1);
        // redirect

      }
      else if(result.message === "Invalid Password"){
        console.log(2);

      }
      else if(result.message === "User does not exist"){
        console.log(3);
      }
      
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    await loginUser({ email, password });

  }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit"> LogIn </button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
