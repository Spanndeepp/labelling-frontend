import React, { useEffect, useState } from "react";
import { getUser } from "../../Utils/Common";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import axiosInstance from "../AxiosInstance/AxiosInstance";
import "./Manager.css";
import AddObject from "./AddObject/AddObject";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

function Manager(props) {
  const [error, setError] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [user, setUser] = useState({});
  let button;

  const email = getUser();

  useEffect(() => {
    setError("");
    axiosInstance
      .post("/api/auth/getManager", {
        email,
      })
      .then((res) => {
        // console.log(res.data);
        setUser(res.data.manager);
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

  const handleClose = (reason) => {
    if (reason === "clickaway") return;
    setSnackBarOpen(false);
  };

  var vertical = "top";
  var horizontal = "center";

  return (
    <>
      <div className="labeller-info">
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
        Welcome Admin <span className="bold-text">{user.name}</span>
        {/* <div className="manager-container">
          <Row>
            <Col xs={12} md={4}>
              <Form.Check
                inline
                type="radio"
                label="Add an Object"
                name="manager-group"
                onChange={() => setRadioSelected(0)}
                defaultChecked
              />
            </Col>
            <Col xs={12} md={4}>
              <Form.Check
                inline
                type="radio"
                label="Show Objects List"
                name="manager-group"
                onChange={() => setRadioSelected(1)}
              />
            </Col>
            <Col xs={12} md={4}>
              <Form.Check
                inline
                type="radio"
                label="View Images"
                name="manager-group"
                onChange={() => setRadioSelected(2)}
              />
            </Col>
          </Row>
        </div> */}
        <AddObject />
        <div>{button}</div>
      </div>
    </>
  );
}

export default Manager;
