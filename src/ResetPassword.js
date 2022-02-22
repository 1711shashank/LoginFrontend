import React, { useState } from "react";
import { useHistory } from "react-router-dom";


async function changePassword(credentials,backendToken) {
  try {
    let response = await fetch(`http://localhost:3000/resetPassword/${backendToken}`, {
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

export default function ResetPassword() {
  const history = useHistory();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await changePassword({ password});
    if (response.statusCode == 200) {
      history.push("/login");
    } 
    else if(response.statusCode == 404){
      console.log("Invalid token");
    }
    else if(response.statusCode == 500){
      console.log("Internal Server Err");
    }
  };

  return (
    <div className="resetPassword">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit"> Change Password </button>
        </div>
      </form>
    </div>
  );
}
