import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { getUser, getUserType, setUserEmail } from "../../Utils/Common";
import axiosInstance from "../AxiosInstance/AxiosInstance";
import "react-phone-number-input/style.css";
import "./Profile.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Profile = () => {
  const [user, setUser] = useState(null);
  const [oldEmail, setOldEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const userType = getUserType();

  useEffect(() => {
    const url =
      userType === "manager" ? "/api/auth/getManager" : "/api/auth/getLabeller";
    const email = getUser();
    axiosInstance
      .post(url, {
        email,
      })
      .then((res) => {
        // console.log(res.data[userType]);
        setUser(res.data[userType]);
        setOldEmail(res.data[userType].email);
      });
  }, [userType]);

  const handleUpdateProfile = async () => {
    try {
      setError("");
      setSuccess("");
      if (user.name === "") {
        setError("Name is Missing!!!");
      } else if (user.email === "") {
        setError("Email is Missing!!!");
      } else if (user.phone === "") {
        setError("Phone is Missing!!!");
      } else {
        setLoading(true);
        await axiosInstance.put(
          `/api/auth/updateProfile?oldEmail=${oldEmail}&userType=${userType}`,
          user
        );
        setUserEmail(user.email);
        setSuccess("Email Updated Successfully!!!");
      }
    } catch (err) {
      console.error(err.response);
      setError(err.response.data.error);
    } finally {
      setSnackBarOpen(true);
      setLoading(false);
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
                <h2>View/Update Profile</h2>
                <hr className="mx-35 my-3" />
                <h4 className="mb-2">
                  {user.name.toUpperCase()} ({userType.toUpperCase()})
                </h4>
              </div>

              <div className="row justify-content-between">
                <div className="form-group col-12 mb-2">
                  <label htmlFor="in__first" className="mb-1">
                    First Name
                  </label>
                  <input
                    className="form-control bg-white mb-1"
                    type="text"
                    name="firstname"
                    value={user.name}
                    id="in__first"
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="form-group row-cols-1 mb-2">
                  <label htmlFor="in__email" className="mb-1">
                    Email
                  </label>
                  <input
                    className="form-control bg-white mb-1"
                    type="text"
                    id="in__email"
                    name="email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>

                <div className="form-group row-cols-1 mb-2">
                  <label htmlFor="in__phn mb-1">Phone</label>
                  <PhoneInput
                    className="form-control bg-white mb-1"
                    id="in__phn"
                    name="phone"
                    value={user.phone}
                    onChange={(value) => setUser({ ...user, phone: value })}
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
                    Update Profile
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

export default Profile;
