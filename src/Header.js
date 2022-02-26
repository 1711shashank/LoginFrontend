import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

function Header() {

  const history = useHistory();
  let [buttonValue, setButtonValue] = useState('Log In');
  let [checkUserAuth, setCheckUserAuth] = useState();
  let [userDate, setUserDate] = useState('Hello');

  useEffect(async () => {
    checkUserAuth = localStorage.getItem('isLoggedIn');
    if (checkUserAuth === 'true') {
      let userName = localStorage.getItem('Name');

      setUserDate("Hello " + userName);
      setButtonValue('Log Out');
      document.querySelector('.createAccount').style.display = 'none';

    }
    else {

      setUserDate("Hello");
      setButtonValue('Log In');
      document.querySelector('.createAccount').style.display = 'block';

    }
  });

  const handleClick = async (e) => {
    e.preventDefault();

    if (buttonValue === 'Log In') {
      history.push('/login')
    } else {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('Name');
      setButtonValue('Log In');
    }

  }

  const handleCreateAccountBtn = () => {
    history.push('/signup');
  }


  return (
    <div>
      <h1 > {userDate}  </h1>
      <button onClick={handleCreateAccountBtn} className='createAccount'> Create Account </button>
      <button onClick={handleClick}> {buttonValue} </button>
    </div>
  )
}

export default Header