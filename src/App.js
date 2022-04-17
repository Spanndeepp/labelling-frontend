import React, { useState, useEffect } from "react";
import { HashRouter, Switch } from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Manager from "./Components/Manager/Manager";
import Labeller from "./Components/Labeller/Labeller";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import {
  getToken,
  getUser,
  getUserType,
  removeUserSession,
  setUserSession,
} from "./Utils/Common";
import Register from "./Components/Register/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import axiosInstance from "./Components/AxiosInstance/AxiosInstance";
import ShowObj from "./Components/Manager/ShowObj/ShowObj";
import ImageControls from "./Components/Manager/ImageControls/ImageControls";
import Profile from "./Components/Profile/Profile";
import ChangePassword from "./Components/ChangePassword/ChangePassword";

const App = () => {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) return;

    const user = getUser();
    if (!user) return;

    const userType = getUserType();
    if (!userType) return;
    axiosInstance
      .get(`/api/auth/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "JWT fefege...",
          token: token,
          user: user,
        },
      })
      .then((response) => {
        // console.log(response);
        setUserSession(userType, response.data.token, response.data.user);
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
      <HashRouter>
        <div>
          <div className="content">
            <Switch>
              <PublicRoute exact path="/" component={Home} />
              <PublicRoute path="/register" component={Register} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/manager" component={Manager} />
              <PrivateRoute path="/labeller" component={Labeller} />
              {/* <PrivateRoute path="/add-object" component={AddObject} /> */}
              <PrivateRoute path="/show-object" component={ShowObj} />
              <PrivateRoute path="/view-images" component={ImageControls} />
              <PrivateRoute path="/user-profile" component={Profile} />
              <PrivateRoute
                path="/change-password"
                component={ChangePassword}
              />
            </Switch>
          </div>
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
