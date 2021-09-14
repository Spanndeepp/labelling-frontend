import React, { useEffect, useState } from "react";
import { getUser, removeUserSession } from "../../Utils/Common";
import axios from "axios";
import ImageShow from "./ImageShow";
import "./Labeller.css";

function Labeller(props) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [sendFiles, setSendFiles] = useState([]);
  const [initialCount, setInitialCount] = useState(0);
  const [user, setUser] = useState({
    email: "",
    name: "",
    obj_assigned: "",
    obj_submitted: "",
    phone: "",
  });

  const email = getUser();
  if (!email) {
    alert("Login Again!!!");
    removeUserSession();
    props.history.push("/login");
  }

  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  const handleSelect = (e) => {
    setSelectedFiles(e.target.files);
  };

  useEffect(() => {
    axios
      .post("https://labelling-backend.herokuapp.com/api/auth/getLabeller", {
        email,
      })
      .then((res) => {
        // console.log(res.data);
        setUser(res.data.labeller);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setSendFiles(selectedFiles);
    setInitialCount(0);
  }, [selectedFiles]);

  return (
    <>
      <div className="labeller-info">
        Hello Labeller <span className="bold-text">{user.name}</span>
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
          accept="image/png, image/jpg, image/jpeg"
          multiple
        />
        {/* <Filelist selectedFiles={sendFiles} /> */}
        <ImageShow selectedFiles={sendFiles} initialCount={initialCount} />
      </div>
    </>
  );
}

export default Labeller;
