import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { setUserSession } from "../../Utils/Common";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import "./Login.css";
import axiosInstance from "../AxiosInstance/AxiosInstance";

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
    axiosInstance
      .post("/api/auth/login", {
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        setLoading(false);
        if (res.data.flag === 0) {
          setUserSession("labeller", res.data.token, res.data.labeller.email);
          props.history.push({
            pathname: "/dashboard",
            state: { user: res.data.labeller },
          });
        } else if (res.data.flag === 1) {
          setUserSession("manager", res.data.token, res.data.manager.email);
          props.history.push({
            pathname: "/dashboard",
            state: { user: res.data.manager },
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error.response);
        if (error.response.status === 400)
          setError("Some of the fields are missing!!");
        else if (error.response.status === 401)
          setError(error.response.data.error);
        else setError("Something went wrong. Please try again later.");
      });
    return () => {};
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
              <NavLink to="/register">
                <h4>Not Registered? Click here to Register</h4>
              </NavLink>
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
