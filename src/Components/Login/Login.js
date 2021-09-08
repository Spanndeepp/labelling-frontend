import React, { useState, useEffect } from "react";
import axios from "axios";
import { setUserSession } from "../../Utils/Common";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import "./Login.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = (props) => {
  const [loading, setLoading] = useState(false);
  const email = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  useEffect(() => {
    document.getElementsByClassName("outer-log")["0"].style.height =
      window.innerHeight - 64 + "px";
  });

  // handle button click of login form
  const handleLogin = () => {
    setSnackBarOpen(true);
    setError(null);
    setLoading(true);
    axios
      .post("http://localhost:4000/api/auth/login", {
        email: email.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        // console.log('data', response.data);
        setUserSession(response.data.token, response.data.user);
        // console.log(response.data.user);
        props.history.push("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 400)
          setError("Some of the fields are missing!!");
        else if (error.response.status === 401)
          setError("Email address or password is incorrect");
        else setError("Something went wrong. Please try again later.");
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBarOpen(false);
  };

  // set the position of error snackbar
  var vertical = "top";
  var horizontal = "center";

  return (
    <div className="outer-log">
      <div id="container-log">
        <div id="form-container-log">
          <div id="login-form-shadow">
            <div id="loginHeading">
              <h1>Login</h1>
            </div>

            <div className="login-input-styles">
              {/* <label className="labelcontainer" >Email ID</label> */}
              <input
                className="login-box"
                type="text"
                placeholder="E-Mail"
                {...email}
              />
            </div>
            <div>
              <div className="login-input-styles">
                {/* <label className="labelcontainer" >Password</label> */}
                <input
                  className="login-box"
                  type="password"
                  placeholder="Password"
                  {...password}
                />
              </div>
            </div>
            {error && (
              <div>
                <Snackbar
                  className="login-snackbar-log"
                  open={snackBarOpen}
                  autoHideDuration={5000}
                  onClose={handleClose}
                  anchorOrigin={{ vertical, horizontal }}
                >
                  <Alert onClose={handleClose} severity="error">
                    {error}
                  </Alert>
                </Snackbar>
              </div>
            )}
            <br />
            <div className="login-input-styles login-submit-btn">
              <input
                type="button"
                id="login"
                className="login"
                value={loading ? "Loading..." : "Login"}
                onClick={handleLogin}
                disabled={loading}
              />
            </div>
            <div id="registration-page">
              <a href="/register">
                <h4>Not Registered? Click here to Register</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Login;
