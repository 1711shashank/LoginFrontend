import React, { useState,useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


function Test() {
  const history = useHistory();
  let [buttonValue, setButtonValue] = useState('Log In');
  let [testUserAuth, setTestUserAuth] = useState();

  useEffect( () => {

    testUserAuth = localStorage.getItem('user');

    if(testUserAuth === 'true'){
        setButtonValue('Log Out');
    }
    else{
        setButtonValue('Log In');
    }
  });

  const handalAction = async (e) => {
    e.preventDefault();

    if(buttonValue === 'Log In'){
        localStorage.setItem('user',true);
        setButtonValue('Log Out');
    }else{
        localStorage.removeItem('user');
        setButtonValue('Log In');
    }

  }

  return (
    <div>
        <h1> Please Log In</h1>
        <button onClick={handalAction}> {buttonValue} </button>
    </div>
  )
}

export default Test