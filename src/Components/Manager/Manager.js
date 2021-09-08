import React from "react";
import { removeUserSession } from "../../Utils/Common";

function Manager(props) {
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <>
      <div>Hello Manager</div>
      <input type="button" onClick={handleLogout} value="Logout" />
    </>
  );
}

export default Manager;
