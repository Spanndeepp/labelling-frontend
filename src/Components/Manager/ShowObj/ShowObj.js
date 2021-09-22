import React, { useEffect, useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import "./ShowObj.css";
import ObjTable from "./ObjTable";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ShowObj = () => {
  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);
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

  useEffect(() => {
    setData(rows);
  }, [rows]);

  const handleFilter = (e) => {
    setData(rows.filter((d) => d.status === e.target.value));
  };

  const resetFilter = () => {
    setData(rows);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") return;
    setSnackBarOpen(false);
  };

  var vertical = "top";
  var horizontal = "center";

  return (
    <div className="add-object">
      <h1>Show Objects</h1>
      <div className="filter-criteria">
        <span className="filter-label">Filter According to:</span>
        {rows && (
          <select className="filter-dropdown" onChange={handleFilter}>
            <option value="Assigned">Assigned</option>
            <option value="Unassigned">UnAssigned</option>
            <option value="Labelled">Labelled</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>
        )}
        <input
          type="button"
          value="Reset Filters"
          className="reset-filter-button"
          onClick={resetFilter}
        />
      </div>
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
        <ObjTable data={data} />
      )}
    </div>
  );
};

export default ShowObj;
