import React from "react";
// import { useLocation } from "react-router";
import { getUserType, removeUserSession } from "../../Utils/Common";
import "./Dashboard.css";

function Dashboard(props) {
  // handle click event of logout button
  const userType = getUserType();
  let user;
  if (props.location.state !== undefined && props.location.state !== null) {
    user = props.location.state.user;
    // console.log(user);
  }
  if (userType === "labeller" || userType === "manager")
    props.history.push({ pathname: `/${userType}`, state: { user } });
  const handleNavigation = () => {};
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <div>
      <input type="button" onClick={handleNavigation} value="Manager" />
      <br />
      <input type="button" onClick={handleNavigation} value="Labeller" />
      <br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;
