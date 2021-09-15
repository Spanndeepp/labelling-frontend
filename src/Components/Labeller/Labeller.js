import React, { useEffect, useState } from "react";
import { getUser, removeUserSession } from "../../Utils/Common";
import axios from "axios";
import ImageShow from "./ImageShow/ImageShow";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import "./Labeller.css";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

function Labeller(props) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [sendFiles, setSendFiles] = useState([]);
  const [initialCount, setInitialCount] = useState(0);
  const [error, setError] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);
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

  const handleComplete = () => {
    return 1;
  };

  const handleSelect = (e) => {
    setSelectedFiles(e.target.files);
  };

  useEffect(() => {
    setError("");
    axios
      .post("https://labelling-backend.herokuapp.com/api/auth/getLabeller", {
        email,
      })
      .then((res) => {
        setUser(res.data.labeller);
      })
      .catch((err) => {
        if (err.response.status === 402)
          setError("User not found with given email");
        else setError("Something went wrong...😢");
        setSnackBarOpen(true);
      });

    return () => {};
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setSendFiles(selectedFiles);
    setInitialCount(0);
  }, [selectedFiles]);

  const handleClose = (reason) => {
    if (reason === "clickaway") return;
    setSnackBarOpen(false);
  };

  var vertical = "top";
  var horizontal = "center";

  return (
    <>
      <div className="labeller-info">
        Hello Labeller <span className="bold-text">{user.name}</span>
        {user.obj_submitted >= 200 ? (
          <input
            type="button"
            onClick={handleComplete}
            className="complete-button"
            value="Complete"
          />
        ) : null}
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
          accept="image/jpg"
          multiple
        />
        {/* <Filelist selectedFiles={sendFiles} /> */}
        <ImageShow selectedFiles={sendFiles} initialCount={initialCount} />
        {error && (
          <>
            <Snackbar
              className="snackbar-reg"
              open={snackBarOpen}
              autoHideDuration={5000}
              onClose={handleClose}
              anchorOrigin={{ vertical, horizontal }}
            >
              <Alert onClose={handleClose} severity="error">
                {error}
              </Alert>
            </Snackbar>
          </>
        )}
      </div>
    </>
  );
}

export default Labeller;
