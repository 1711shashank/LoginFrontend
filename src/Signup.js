import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

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
//   const [confirmPassword, setConfirmPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    let response = await signupUser({ name, email, password});
    console.log(response.statusCode);
    if(response.statusCode == 200){
      history.push('/login');
    }
    if(response.statusCode == 409){
      history.push('/login');
    }
  }

  return (
    <div className="signup-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input type="text" onChange={e => setName(e.target.value)} />
        </label>
        <label>
          <p>Email</p>
          <input type="email" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        {/* <label>
          <p> Confirm Password</p>
          <input type="password" onChange={e => setConfirmPassword(e.target.value)} />
        </label> */}
        <div>
          <button type="submit"> Sign Up </button>
        </div>
      </form>
    </div>
  )
}

