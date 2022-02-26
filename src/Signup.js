import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

async function signupUser(credentials) {
  try {
    let response = await fetch('http://localhost:3000/signup', {
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

export default function Signup() {
  const history = useHistory();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [resMessage, setResMessage] = useState("");


  const handleSubmit = async e => {
    e.preventDefault();
    let response = await signupUser({ name, email, password});
    if(response.statusCode == 200){
      setResMessage(response.message);
    }
    if(response.statusCode == 409){
      setResMessage(response.message);
    }
  }

  return (
    <div className="signup-wrapper">
      <h1>Create Account</h1>
      {resMessage != ""
        ? <h3 style={{ color: "palegreen" }}> {resMessage} </h3>
        : <h3></h3>
      }
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input type="text" onChange={e => setName(e.target.value)} required/>
        </label>
        <label>
          <p>Email</p>
          <input type="email" onChange={e => setEmail(e.target.value)} required/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} required/>
        </label>
        <div>
          <button type="submit"> Create Account </button>
        </div>
      </form>

      <Link to = '/login'>
        <h5 style={{ textDecoration: 'none' }}> Click here to LogIn if you already have an Account</h5>
      </Link>
    </div>
  )
}

