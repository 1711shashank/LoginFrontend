import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";

// async function getUserData() {
//   try {
//     let response = await fetch('http://localhost:3000/dashboard', {
//       headers: { 'Content-Type': 'application/json' },
//       method: 'GET',
//       // body: JSON.stringify();
//     });

//     response = await response.json();
//     console.log(response.message);
//     return response;

//   }
//   catch(err) {
//     console.error('Error:', err);
//   }

// }

function Header() {

  const history = useHistory();
  let [buttonValue, setButtonValue] = useState('Log In');
  let [testUserAuth, setTestUserAuth] = useState();
  let [userDate, setUserDate] = useState('Hello');

  useEffect( async () => {
    testUserAuth = localStorage.getItem('isLoggedIn');
    if (testUserAuth === 'true') {
      
      // let somdata = await getUserData();
      setUserDate("Log in sucessfull");
      setButtonValue('Log Out');
      document.querySelector('.createAccount').style.display = 'none' ;
    }
    else {

      setUserDate("Hello");
      setButtonValue('Log In');
      document.querySelector('.createAccount').style.display = 'block' ;

    }
  });

  const handleClick = async (e) => {
    e.preventDefault();

    if (buttonValue === 'Log In') {
      history.push('/login')
    } else {
      localStorage.removeItem('isLoggedIn');
      setButtonValue('Log In');
    }

  }

  const handleCreateAccountBtn = () => {
    history.push('/signup');
  }


  return (
    <div>
      <h1> {userDate}  </h1>

      <button onClick={handleCreateAccountBtn} className='createAccount'> Create Account </button>
      <button onClick={handleClick}> {buttonValue} </button>
    </div>
  )
}

export default Header