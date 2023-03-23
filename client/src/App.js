// frontend/src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/app" component={Main} />
      </Switch>
    </Router>
  );
};

export default App;
