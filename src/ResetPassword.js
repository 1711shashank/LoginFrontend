import React, { useState } from "react";
import { Link } from "react-router-dom";

async function changePassword(credentials) {
  try {

    let backendToken = localStorage.getItem('tokenKey');
    
    let response = await fetch(`http://localhost:3000/resetPassword/${backendToken}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(credentials)
    });

    response = await response.json();
    console.log(response.message);
    return response;

  }
  catch (err) {
    console.error('Error:', err);
  }

}

export default function ResetPassword() {
  const [password, setPassword] = useState();
  const [resMessage, setResMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await changePassword({ password });
    if (response.statusCode == 200) {
      setResMessage(response.message);
      localStorage.removeItem('tokenKey');
    }
    else if (response.statusCode == 404) {
      setResMessage(response.message);
    }
    else if (response.statusCode == 500) {
      console.log("Internal Server Err");
    }
  };

  return (
    <div className="resetPassword">
      <h1>Enter New Password</h1>
      {resMessage != ""
        ? resMessage === "Your Reset Password link has expired"
          ? <h3 style={{ color: "red" }}> {resMessage} </h3>
          : <h3 style={{ color: "palegreen" }}> {resMessage} </h3>
        : <h3></h3>
      }
      <form onSubmit={handleSubmit}>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div>
          <button type="submit"> Change Password </button>
        </div>

      </form>
      <Link to='/login'>
        <button>Log In </button>
      </Link>

    </div>
  );
}
