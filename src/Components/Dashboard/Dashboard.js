import React from "react";
import { getUser, removeUserSession } from "../../Utils/Common";

import "./Dashboard.css";

function Dashboard(props) {
  const user = getUser();
  console.log(user);

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <div>
      <br />
      <br />
      Welcome User {user.firstname} {user.lastname}!<br />
      <br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;
