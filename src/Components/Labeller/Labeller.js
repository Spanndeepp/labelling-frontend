import React, { useEffect, useState } from "react";
import { removeUserSession } from "../../Utils/Common";
// import Filelist from "./Filelist";
import ImageShow from "./ImageShow";
import "./Labeller.css";

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
      <div className="labeller-info">
        Hello Labeller <span className="bold-text">Name</span>
        <input
          type="button"
          className="logout-button style-button"
          onClick={handleLogout}
          value="Logout"
        />
        <p className="object-data">
          Object Assigned -&nbsp;
          <span className="bold-text">
            {user ? user.obj_assigned : "something"}
          </span>
        </p>
        <p className="object-data">
          Objects Submitted -&nbsp;
          <span className="bold-text">{user ? user.obj_submitted : 0}</span>
        </p>
      </div>
      <div className="file-controls">
        <input
          type="file"
          className="choose-files-button"
          onChange={handleSelect}
          accept="image/*"
          multiple
        />
        {/* <Filelist selectedFiles={sendFiles} /> */}
        <ImageShow selectedFiles={sendFiles} initialCount={initialCount} />
      </div>
    </>
  );
}

export default Labeller;
