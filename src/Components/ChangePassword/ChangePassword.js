import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { getUser, getUserType } from "../../Utils/Common";
import axiosInstance from "../AxiosInstance/AxiosInstance";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ChangePassword = () => {
  const [user, setUser] = useState({ newPassword: "", confNewPassword: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const userType = getUserType();
  const email = getUser();

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setSuccess("");
      if (user.password === "") {
        setError("Current Password is Required!!!");
      } else if (user.newPassword === "") {
        setError("New Password is Missing!!!");
      } else if (user.confNewPassword === "") {
        setError("Confirm New Password is Missing!!!");
      } else if (user.confNewPassword !== user.newPassword) {
        setError("New Password and Confirm New Password don't match!!!");
      } else {
        setLoading(true);
        await axiosInstance.put(
          `/api/auth/changePassword?email=${email}&password=${user.password}&userType=${userType}`,
          user
        );
        setSuccess("Password Changed Successfully!!!");
      }
    } catch (err) {
      console.error(err.response);
      setError(err.response.data.error);
    } finally {
      setSnackBarOpen(true);
      setLoading(false);
      setUser({ newPassword: "", confNewPassword: "", password: "" });
    }
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBarOpen(false);
  };

  // set the position of error snackbar
  const vertical = "top";
  const horizontal = "center";

  return (
    user && (
      <div className="up__body">
        <div className="up__container container-fluid-sm m-5 d-flex justify-content-center">
          <div className="up__form w-50 mb-5">
            <form>
              <div className="up__heading text-center mt-2">
                <h2>Change Password</h2>
                <hr className="mx-35 my-3" />
              </div>

              <div className="row justify-content-between">
                <div className="form-group col-12 mb-2">
                  <label htmlFor="password" className="mb-1">
                    Current Password
                  </label>
                  <input
                    className="form-control bg-white mb-1"
                    type="password"
                    name="password"
                    value={user.password}
                    id="password"
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="form-group row-cols-1 mb-2">
                  <label htmlFor="newPassword" className="mb-1">
                    New Password
                  </label>
                  <input
                    className="form-control bg-white mb-1"
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={user.newPassword}
                    onChange={(e) =>
                      setUser({ ...user, newPassword: e.target.value })
                    }
                  />
                </div>

                <div className="form-group row-cols-1 mb-2">
                  <label htmlFor="confNewPassword" className="mb-1">
                    Confirm New Password
                  </label>
                  <input
                    className="form-control bg-white mb-1"
                    type="password"
                    id="confNewPassword"
                    name="confNewPassword"
                    value={user.confNewPassword}
                    onChange={(e) =>
                      setUser({ ...user, confNewPassword: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="form-group col-sm-12 d-flex justify-content-center">
                  <button
                    type="submit"
                    className="updateProfile"
                    onClick={handleUpdateProfile}
                    disabled={loading}
                  >
                    {loading && (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                    )}{" "}
                    Change Password
                  </button>
                </div>
              </div>
            </form>
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
        </div>
      </div>
    )
  );
};

export default ChangePassword;
