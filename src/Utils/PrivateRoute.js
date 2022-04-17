import React, { useEffect } from "react";
import { NavLink, useHistory, Route, Redirect } from "react-router-dom";
import Person from "@material-ui/icons/Person";
import Home from "@material-ui/icons/Home";
import { getToken, getUserType, removeUserSession } from "./Common";
import "../index.css";

// handle the private routes
const PrivateRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  // const [userType, setUserType] = useState(null);

  const handleLogout = () => {
    removeUserSession();
    history.push("/login");
  };

  useEffect(() => {
    document.getElementById("post-login-dropdown").style.marginLeft =
      getUserType() === "manager"
        ? window.innerWidth - 450 + "px"
        : window.innerWidth - 130 + "px";
  }, []);

  return (
    <>
      <div className="header">
        <div className="header-home">
          <NavLink to="/">
            <Home className="userImg" fontSize="large" />
          </NavLink>
        </div>
        <section id="post-login-dropdown" className="d-flex">
          {getUserType() === "manager" && (
            <div className="links-post-login">
              <NavLink activeClassName="active" to="/show-object">
                Show Objects List
              </NavLink>
              <NavLink activeClassName="active" to="/view-images">
                View Images
              </NavLink>
            </div>
          )}
          <div className="dropdown">
            <Person id="user" fontSize="large" className="userImg" />
            <div className="dropdownContent">
              <NavLink to="/user-profile">View Profile</NavLink>
              <NavLink to="/settings">Edit Profile</NavLink>
              <NavLink to="/" onClick={handleLogout}>
                Logout
              </NavLink>
            </div>
          </div>
        </section>
      </div>
      <Route
        {...rest}
        render={(props) =>
          getToken() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;
