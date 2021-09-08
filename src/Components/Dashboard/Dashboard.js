import React from "react";
import { getUserType, removeUserSession } from "../../Utils/Common";

import "./Dashboard.css";

function Dashboard(props) {
  // handle click event of logout button
  const userType = getUserType();
  if (userType === "labeller" || userType === "manager")
    props.history.push(`/${userType}`);
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
