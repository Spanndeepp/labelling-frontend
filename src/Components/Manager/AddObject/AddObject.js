import React, { useState } from "react";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import "./AddObject.css";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const AddObject = () => {
  const [object, setObject] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const InputObject = (e) => {
    setObject(e.target.value);
  };

  const AddObject = () => {
    setSuccess("");
    setError("");
    axios
      .post("https://labelling-backend.herokuapp.com/api/auth/addObject", {
        objectName: object,
      })
      .then((res) => {
        setSuccess("Object Added✌👍");
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.status === 402) setError("Object already exists!!");
        else setError("Something went wrong😢...Please try again later!!");
      });
    setSnackBarOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") return;
    setSnackBarOpen(false);
  };

  var vertical = "top";
  var horizontal = "center";

  return (
    <div className="add-object">
      <h1>Create an Object</h1>
      <input className="enter-object" onChange={InputObject} type="text" />
      <input
        type="button"
        className="add-object-button"
        onClick={AddObject}
        value="Add"
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
      {success && (
        <>
          <Snackbar
            className="snackbar-reg"
            open={snackBarOpen}
            autoHideDuration={5000}
            onClose={handleClose}
            anchorOrigin={{ vertical, horizontal }}
          >
            <Alert onClose={handleClose} severity="success">
              {success}
            </Alert>
          </Snackbar>
        </>
      )}
    </div>
  );
};

export default AddObject;
