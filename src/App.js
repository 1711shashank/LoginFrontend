import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ForgetPassword from "./ForgetPassword";
import ResetPassword from "./ResetPassword";
import Header from "./Header";

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup">                        <Signup />                          </Route>
          <Route path="/login">                         <Login />                           </Route>
          <Route path="/dashboard">                     <Dashboard />                       </Route>
          <Route path="/forgetPassword">                <ForgetPassword />                       </Route>
          <Route path="/resetPassword">                 <ResetPassword />                  </Route>
          <Route path="/">                              <Header />                          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;