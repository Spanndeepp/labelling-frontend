import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { getToken } from "./Common";

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  useEffect(() => {
    // console.log(document.getElementsByClassName("links"), screen.width);
    document.getElementsByClassName("links")[0].style.marginLeft =
      window.innerWidth - 202 - 320 + "px";
  }, []);
  return (
    <>
      <div className="header">
        <div className="header-label">
          <h2>Labelling Tool</h2>
        </div>
        <div className="links">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/login">
            Login
          </NavLink>
          <NavLink activeClassName="active" to="/register">
            Register
          </NavLink>
        </div>
      </div>
      <Route
        {...rest}
        render={(props) =>
          !getToken() ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/dashboard" }} />
          )
        }
      />
    </>
  );
}

export default PublicRoute;
