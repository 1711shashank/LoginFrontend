import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function Header() {
  return (
    <div className="header">
      <h1>Header Area</h1>
      <Link to="/signup">
        <button>Create Account</button>
      </Link>
      <Link to="/login">
        <button>Log in</button>
      </Link>
    </div>
  )
}

export default Header