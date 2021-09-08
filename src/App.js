import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import axios from "axios";
import Login from "./Components/Login/Login";
// import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Manager from "./Components/Manager/Manager";
import Labeller from "./Components/Labeller/Labeller";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import {
  getToken,
  getUser,
  removeUserSession,
  setUserSession,
} from "./Utils/Common";
import Register from "./Components/Register/Register";
import Dashboard from "./Components/Dashboard/Dashboard";

const App = () => {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
    const user = getUser();
    if (!user) {
      return;
    }
    axios
      .get(`https://labelling-backend.herokuapp.com/api/auth/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "JWT fefege...",
          token: token,
          user: user,
        },
      })
      .then((response) => {
        // console.log(response);
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      })
      .catch((error) => {
        removeUserSession();
        setAuthLoading(false);
      });
    return () => {};
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink activeClassName="active" to="/login">
              Login
            </NavLink>
            <NavLink activeClassName="active" to="/register">
              Register
            </NavLink>
            <NavLink activeClassName="active" exact to="/dashboard">
              Dashboard
            </NavLink>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute path="/register" component={Register} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/manager" component={Manager} />
              <PrivateRoute path="/labeller" component={Labeller} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
