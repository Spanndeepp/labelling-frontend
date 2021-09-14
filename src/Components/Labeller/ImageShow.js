import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import EditImage from "./EditImage";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import DoneIcon from "@material-ui/icons/Done";
import "./ImageShow.css";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

function ImageShow({ selectedFiles, initialCount }) {
  const [currImage, setCurrImage] = useState(selectedFiles[initialCount]);
  const [count, setCount] = useState(initialCount);
  const [prevCount, setPrevCount] = useState(initialCount);
  const [array, setArray] = useState([]);
  const [error, setError] = useState("");
  const uploaded = useRef([]);
  const [success, setSuccess] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  useEffect(() => {
    uploaded.current = new Array(selectedFiles.length).fill(false);
    console.log(uploaded.current);
  }, [selectedFiles]);

  useEffect(() => {
    count < selectedFiles.length && selectedFiles.length && count >= 0
      ? setCurrImage(URL.createObjectURL(selectedFiles[count]))
      : setCurrImage(selectedFiles[initialCount]);
    // console.log(count, "count", selectedFiles);
    if (selectedFiles.length > 0) {
      if (selectedFiles.length === 1) {
        setCount(0);
        document.getElementById("file-0").classList.add("active-file");
        setCurrImage(URL.createObjectURL(selectedFiles[0]));
      } else if (
        document.getElementById(`file-${count}`) !== null &&
        document.getElementById(`file-${prevCount}`) !== null
      ) {
        document.getElementById(`file-${count}`).classList.add("active-file");
        document
          .getElementById(`file-${prevCount}`)
          .classList.remove("active-file");
      }
    }
    //eslint-disable-next-line
  }, [selectedFiles, count]);
  console.log("Hello", count, prevCount);
  const fileNames = [];

  for (let i = 0; i < selectedFiles.length; i++) {
    fileNames.push(
      <aside className="single-file" id={`file-${i}`} key={i}>
        {uploaded.current[i] ? <DoneIcon /> : null} {selectedFiles[i].name}
      </aside>
    );
  }

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", selectedFiles[count]);
    setSuccess("");
    setError("");
    axios
      .post(
        "https://labelling-backend.herokuapp.com/api/upload/uploadImage",
        formData
      )
      .then((res) => {
        setSuccess("Image Uploaded");
        uploaded.current[count] = true;
      })
      .catch((err) => {
        console.log(err.response);
        setError("Images accepted are .png, .jpg and .jpeg only...");
      });
    setSnackBarOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") return;
    setSnackBarOpen(false);
  };

  var vertical = "top";
  var horizontal = "center";

  return (
    <>
      <input
        type="button"
        className="image-controls previous-button"
        onClick={() => {
          setPrevCount(count);
          setCount(count - 1);
        }}
        value="Previous"
        disabled={count === 0}
      />
      <input
        type="button"
        className="image-controls"
        onClick={() => {
          setPrevCount(count);
          setCount(count + 1);
        }}
        value="Next"
        disabled={count >= selectedFiles.length - 1}
      />
      <input
        type="button"
        className="image-controls"
        onClick={() => {
          setPrevCount(count);
          setCount(0);
        }}
        disabled={count === 0}
        value="Reset"
      />
      {currImage && (
        <input
          type="button"
          className="upload-button"
          onClick={handleUpload}
          value="Upload Image"
        />
      )}
      {selectedFiles.length ? (
        <div className="files-images">
          <div className="file-names">{fileNames}</div>
          <div className="edit-image">
            {currImage && (
              <EditImage
                currImage={currImage}
                array={array}
                setArray={setArray}
              />
            )}
          </div>
        </div>
      ) : null}
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
    </>
  );
}

export default ImageShow;
