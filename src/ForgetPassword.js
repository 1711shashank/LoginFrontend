import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

async function generateResetPasswordLink(credentials) {
  try {
    let response = await fetch('http://localhost:3000/forgetPassword', {
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

export default function ForgetPassword(props) {
  const history = useHistory();
  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await generateResetPasswordLink({ email });
    console.log(response);
    if (response.statusCode == 511) {
      history.push("/signup");
    } 
    else if(response.statusCode == 200){
      let resetPasswordToken = response.data.resetToken;
      console.log("clickeddddd",resetPasswordToken);
      props.parentCallback(resetPasswordToken);
    
    }
  };

  return (
    <div className="ForgetPassword">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <div>
          <button type="submit"> Change Password </button>
        </div>
      </form>      
    </div>
  );
}

