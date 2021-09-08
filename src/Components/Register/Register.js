import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./Register.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    cpassword: "",
    name: "",
    userType: "",
  });
  const [phonevalue, setphoneValue] = useState();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  let url = "";

  let name, value;
  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const RadioEvent = (e) => setUser({ ...user, userType: e.target.value });

  useEffect(() => {
    document.getElementById("registration-container").style.height =
      window.innerHeight - 64 + "px";
  }, []);

  const handleRegister = () => {
    setError("");
    if (user.userType === "") setError("Select a user type");
    if (user.cpassword !== user.password) setError("Passwords don't match");
    else if (user.password.length < 5)
      setError("Minimum length of password is 5 characters");
    else {
      if (user.userType === "labeller")
        url =
          "https://labelling-backend.herokuapp.com/api/auth/registerLabeller";
      else url = "https://labelling-backend.herokuapp.com/api/auth/register";
      axios
        .post(url, {
          email: user.email,
          name: user.name,
          password: user.password,
          phone: phonevalue,
        })
        .then((res) => {
          setSuccess("Registration Successfull");
        })
        .catch((err) => {
          if (err.response.status === 400) {
            setError("Some of the fields are missing!!");
          } else if (err.response.status === 402) {
            setError("Email id already exists");
          } else if (err.response.status === 500) {
            setError("Server failed");
          }
        });
    }
    setSnackBarOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBarOpen(false);
  };

  // set the position of error snackbar
  var vertical = "top";
  var horizontal = "center";

  return (
    <div id="registration-container">
      <div id="success"></div>
      <div id="registration-form-container">
        <form className="register-form" id="registerForm">
          <div id="register-form-shadow">
            <div id="registerHeading">
              <h1>Register Here!!</h1>
            </div>
            <div className="register-radio" onChange={RadioEvent}>
              <div className="register-radio-value">
                <input type="radio" value="labeller" name="radio" />
                <p>Labeller</p>
              </div>
              <div className="register-radio-value">
                <input type="radio" value="manager" name="radio" />
                <p>Manager</p>
              </div>
            </div>
            <div className="register-input-styles register-input-width">
              {/* <label className="Rlabelcontainer" htmlFor="name">First Name</label> */}
              <input
                className="register-box register-single-box"
                type="text"
                value={user.name}
                onChange={handleInputs}
                placeholder="Your Name"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="register-input-styles ">
              {/* <label className="box inline-box" htmlFor="email">Email ID</label> */}
              <input
                className="register-box register-single-box"
                type="text"
                value={user.email}
                onChange={handleInputs}
                name="email"
                id="email"
                placeholder="E-Mail"
                required
              />
            </div>
            <div className="register-input-styles register-input-width">
              {/* <label className="Rlabelcontainer" htmlFor="password">Password</label> */}
              <input
                className="register-box register-inline-box"
                type="password"
                value={user.password}
                onChange={handleInputs}
                name="password"
                placeholder="Password"
                id="password"
                required
              />

              <input
                className="register-box register-inline-box register-right-box"
                type="password"
                value={user.cpassword}
                onChange={handleInputs}
                name="cpassword"
                placeholder="Confirm Password"
                id="cpassword"
                required
              />
            </div>
            <div className="register-input-styles ">
              {/* <label className="box inline-box" htmlFor="email">Email ID</label> */}
              <PhoneInput
                className="register-box register-single-box"
                type="text"
                value={phonevalue}
                onChange={setphoneValue}
                id="phone"
                placeholder="Enter Phone No."
                required
              />
            </div>
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
            {/* <div className="register-input-styles">
              <select
                className="register-box register-single-box register-drop-down "
                id="gender"
                name="gender"
                onChange={handleInputs}
              >
                <option value="gender">Select Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHERS">Others</option>
              </select>
              <br />
            </div> */}
            <div className="register-input-styles register-submit-btn">
              <input
                id="submitDetails"
                type="button"
                className="register-form-submit"
                onClick={handleRegister}
                value="Register"
              />
            </div>
          </div>
        </form>
      </div>
      <div id="login-page">
        <NavLink to="/login">
          <h4>Already Registered? Click here to Login</h4>
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
