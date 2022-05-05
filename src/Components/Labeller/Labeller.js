import React, { useEffect, useState } from "react";
import { getUser } from "../../Utils/Common";
import ImageShow from "./ImageShow/ImageShow";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import axiosInstance from "../AxiosInstance/AxiosInstance";
import "./Labeller.css";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Labeller = () => {
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
    images: [],
  });

  const email = getUser();

  const handleComplete = () => {
    axiosInstance
      .post("/api/auth/completeObj", {
        email,
      })
      .then((res) => {
        setUser(res.data.labellerObj);
        setImagesUploaded(user.images.length);
      })
      .catch((err) => {
        if (err.response.status === 401) setError(err.response.data.error);
        else setError("Something went wrong...😢");
        setSnackBarOpen(true);
      });
  };

  const handleSelect = (e) => {
    setSelectedFiles(e.target.files);
  };

  const [imagesUploaded, setImagesUploaded] = useState(0);

  useEffect(() => {
    setError("");
    // console.log("UseEffect1");
    axiosInstance
      .post("/api/auth/getLabeller", {
        email,
      })
      .then((res) => {
        setUser(res.data.labeller);
        setImagesUploaded(user.images.length);
        // console.log(res.data.labeller);
      })
      .catch((err) => {
        if (err.response.status === 402)
          setError("User not found with given email");
        else setError("Something went wrong...😢");
        setSnackBarOpen(true);
      });

    return () => {};
    //eslint-disable-next-line
  }, [imagesUploaded]);

  // console.log(imagesUploaded);

  useEffect(() => {
    setSendFiles(selectedFiles);
    setInitialCount(0);
  }, [selectedFiles]);

  const handleClose = (reason) => {
    if (reason === "clickaway") return;
    setSnackBarOpen(false);
  };

  const vertical = "top";
  const horizontal = "center";

  return (
    <>
      <div className="labeller-info">
        Hello Labeller <span className="bold-text">{user.name}</span>
        {user.images.length >= 200 ? (
          <input
            type="button"
            onClick={handleComplete}
            className="complete-button"
            value="Complete"
          />
        ) : null}
        <p className="object-data">
          Object Assigned -&nbsp;
          <span className="bold-text">{user ? user.obj_assigned : ""}</span>
        </p>
        <p className="object-data">
          Objects Submitted -&nbsp;
          <span className="bold-text">{user ? user.images.length : 0}</span>
        </p>
      </div>
      <div className="file-controls">
        <input
          type="file"
          className="choose-files-button"
          onChange={handleSelect}
          accept=".jpg"
          multiple
        />
        {/* <Filelist selectedFiles={sendFiles} /> */}
        <ImageShow
          selectedFiles={sendFiles}
          initialCount={initialCount}
          email={user.email}
          obj_assigned={user.obj_assigned}
          setImagesUploaded={setImagesUploaded}
        />
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
};

export default Labeller;
