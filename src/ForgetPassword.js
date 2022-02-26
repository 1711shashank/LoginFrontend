import React, { useState } from "react";

async function generateResetPasswordLink(credentials) {
  try {
    let response = await fetch('http://localhost:3000/forgetPassword', {
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

export default function ForgetPassword(props){
  const [email, setEmail] = useState();
  const [resMessage, setResMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await generateResetPasswordLink({ email });

    if (response.statusCode == 511) {
      setResMessage(response.message);
    } 
    else if(response.statusCode == 200){
      setResMessage(response.message);

      localStorage.setItem('tokenKey', response.data.resetToken);
    }
  };

  return (
    <div className="ForgetPassword">
      <h1>Forget Password</h1>

      {resMessage != ""
        ? resMessage === "No User exist with this Email"
          ? <h3 style={{color: "red"}}> {resMessage} </h3>
          : <h3 style={{color: "palegreen"}}> {resMessage} </h3>
        : <h3></h3>
      }      

      <form onSubmit={handleSubmit}>
        <label>
          <p> Email</p>
          <input type="email"  minsize="30" onChange={(e) => setEmail(e.target.value)} required/>
        </label>

        <div>
          <button type="submit"> Change Password </button>
        </div>
      </form>      
    </div>
  );
}

