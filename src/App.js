import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "./Signup";
import Test from "./Test";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ForgetPassword from "./ForgetPassword";
import ResetPassword from "./ResetPassword";
import NoPageFound from "./NoPageFound";
import Header from "./Header";

{
  
  // TODO:
  //       delete account
  //       Login wala user ko name show 
  //       dote env

}

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route exact path="/" component={Test} /> */}
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />

          <Route exact path="/forgetPassword" > <ForgetPassword/>  </Route>

          <Route exact path={`/resetPassword/${localStorage.getItem('tokenKey')}`} component={ResetPassword } />

          <Route exact path="/" component={Header} />
          <Route path="/" component={NoPageFound} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;