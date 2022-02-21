import React, { useEffect,useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ForgetPassword from "./ForgetPassword";
import ResetPassword from "./ResetPassword";
import Header from "./Header";

function App() {

  const [hashToken, setHashToken] = useState("");

  let handleCallback = (token) =>{
    setHashToken(token);
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup">                        <Signup />                          </Route>
          <Route path="/login">                         <Login />                           </Route>
          <Route path="/dashboard">                     <Dashboard />                       </Route>
          <Route path="/forgetPassword">                <ForgetPassword parentCallback = {handleCallback}/>                       </Route>
          <Route path="/resetPassword">                 <ResetPassword />                  </Route>
          <Route path="/">                              <Header />                          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;