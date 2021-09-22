import React, { useEffect, useState } from "react";
import { removeUserSession, getUser } from "../../Utils/Common";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddObject from "./AddObject/AddObject";
import "./Manager.css";
import ShowObj from "./ShowObj/ShowObj";
import ImageControls from "./ImageControls/ImageControls";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

function Manager(props) {
  const [error, setError] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [radioSelected, setRadioSelected] = useState(0);
  const [user, setUser] = useState({});
  let button;

  const email = getUser();
  if (!email) {
    alert("Login Again!!!");
    removeUserSession();
    props.history.push("/login");
  }

  useEffect(() => {
    setError("");
    axios
      .post("https://labelling-backend.herokuapp.com/api/auth/getManager", {
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

  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  if (radioSelected === 0) button = <AddObject />;
  else if (radioSelected === 1) button = <ShowObj />;
  else if (radioSelected === 2) button = <ImageControls />;

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
        Welcome Manager <span className="bold-text">{user.name}</span>
        <input
          type="button"
          className="logout-button style-button"
          onClick={handleLogout}
          value="Logout"
        />
        <div className="manager-container">
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
        </div>
        <div>{button}</div>
      </div>
    </>
  );
}

export default Manager;
