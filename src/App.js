import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "./Signup";
import Login from "./Login";
import ForgetPassword from "./ForgetPassword";
import ResetPassword from "./ResetPassword";
import NoPageFound from "./NoPageFound";
import Header from "./Header";


function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/forgetPassword" > <ForgetPassword/>  </Route>

          <Route exact path={`/resetPassword/${localStorage.getItem('tokenKey')}`} component={ResetPassword } />

          <Route exact path="/" component={Header} />
          <Route path="/:others" component={NoPageFound} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;