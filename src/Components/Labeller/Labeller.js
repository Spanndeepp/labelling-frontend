import React, { useEffect, useState } from "react";
import { removeUserSession } from "../../Utils/Common";
import Filelist from "./Filelist";
import ImageShow from "./ImageShow";

function Labeller(props) {
  // console.log(props.location.state);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [sendFiles, setSendFiles] = useState([]);
  const [initialCount, setInitialCount] = useState(0);

  let user;
  if (props.location.state !== undefined && props.location.state !== null) {
    user = props.location.state.user;
    // console.log(user);
  }
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  const handleSelect = (e) => {
    setSelectedFiles(e.target.files);
  };

  useEffect(() => {
    setSendFiles(selectedFiles);
    setInitialCount(0);
  }, [selectedFiles]);

  return (
    <>
      <div>Hello Labeller</div>
      <div>Count - {user.obj_submitted}</div>
      <input type="button" onClick={handleLogout} value="Logout" />
      <br />
      <br />
      <br />
      <input type="file" onChange={handleSelect} accept="image/*" multiple />
      <Filelist selectedFiles={sendFiles} />
      <ImageShow selectedFiles={sendFiles} initialCount={initialCount} />
    </>
  );
}

export default Labeller;
