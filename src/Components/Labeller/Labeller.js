import React from "react";
import { removeUserSession } from "../../Utils/Common";

function Labeller(props) {
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <>
      <div>Hello Labeller</div>
      <input type="button" onClick={handleLogout} value="Logout" />
    </>
  );
}

export default Labeller;
