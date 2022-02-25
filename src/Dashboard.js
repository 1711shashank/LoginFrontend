import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";


async function logOutUser() {
  try {
    let response = await fetch('http://localhost:3000/logout', {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET',
    });

    response = await response.json();
    console.log(response.message);
    return response;

  }
  catch(err) {
    console.error('Error:', err);
  }

}

function Dashboard() {

  const loginUser = (e) => {
    console.log("1",(localStorage.getItem('user')));
    localStorage.setItem('user',true);
  }
  const logoutUser = (e) => {
    console.log("2",(localStorage.getItem('user')));
    localStorage.setItem('user',false);
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let response = await logOutUser();

  //   if (response.statusCode == 200) {
  //     localStorage.setItem('user', false);
  //     console.log("Jii");
  //     // history.push("/");
  //   }
  // };

  return (
    <div className='Dashboard'>
        <h1>Dashboard</h1>
        <h3> {(localStorage.getItem('user')) ? "Shashank" : "Name"} </h3>
        <button onClick={loginUser}>  Log In</button>
        <button onClick={logoutUser}> Log Out</button>
    </div>
  )
}

export default Dashboard