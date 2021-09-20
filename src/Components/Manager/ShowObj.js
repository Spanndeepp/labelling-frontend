import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import "./ShowObj.css";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ShowObj = () => {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  useEffect(() => {
    setError("");
    axios
      .get("https://labelling-backend.herokuapp.com/api/auth/getObject")
      .then((res) => {
        setRows(res.data.objects);
        console.log(rows);
      })
      .catch((err) => {
        setError("Something went wrong...");
      });
    setSnackBarOpen(true);
    //eslint-disable-next-line
  }, []);

  const handleClose = (reason) => {
    if (reason === "clickaway") return;
    setSnackBarOpen(false);
  };

  var vertical = "top";
  var horizontal = "center";

  return (
    <div className="add-object">
      <h1>Show Objects</h1>

      {error ? (
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
      ) : (
        <div className="table-container">
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Object Name</th>
                <th>Assigned To</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{r.objectName}</td>
                  <td>{r.assignedTo}</td>
                  <td>{r.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ShowObj;
