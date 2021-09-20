import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import "./ViewImage.css";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ViewImage = () => {
  const [email, setEmail] = useState("");
  const [labeller, setLabeller] = useState({});
  const [error, setError] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const openFile = useCallback(() => {
    if (labeller.images) {
      let file = labeller.images[1].replace(".jpg", ".txt");
      console.log(file);
      axios
        .get(file)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
    //labeller.images
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setError("");
    axios
      .post("https://labelling-backend.herokuapp.com/api/auth/getLabeller", {
        email: "adityakhandelwal4201@gmail.com",
      })
      .then((res) => {
        console.log(res.data);
        setLabeller(res.data.labeller);
      })
      .catch((err) => {
        if (err.response.status === 402)
          setError("User not found with given email");
        else setError("Something went wrong...😢");
        setSnackBarOpen(true);
      });
    openFile();
  }, [openFile]);

  const inputObject = (e) => {
    setEmail(e.target.value);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") return;
    setSnackBarOpen(false);
  };

  var vertical = "top";
  var horizontal = "center";

  return (
    <div className="add-object">
      <input
        type="text"
        className="input-object"
        placeholder="Enter Object Name"
        name="email"
        onChange={inputObject}
      />
      <input type="button" className="get-objects" value="Get Images" />
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
  );
};

export default ViewImage;
