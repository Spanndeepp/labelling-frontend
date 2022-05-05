import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import ViewImage from "../ViewImage/ViewImage";
import axiosInstance from "../../AxiosInstance/AxiosInstance";
import "./ImageControls.css";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ImageControls = () => {
  const [object, setObject] = useState("");
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);
  const [error, setError] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [success, setSuccess] = useState("");

  // useEffect(() => {
  //   setError("");
  //   axios
  //     .post("https://labelling-tool-backend.herokuapp.com/api/auth/getLabeller", {
  //       email: "adityakhandelwal4201@gmail.com",
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setLabeller(res.data.labeller);
  //     })
  //     .catch((err) => {
  //       if (err.response.status === 402)
  //         setError("User not found with given email");
  //       else setError("Something went wrong...😢");
  //       setSnackBarOpen(true);
  //     });
  //   openFile();
  // }, [openFile]);

  const inputObject = (e) => {
    setObject(e.target.value);
  };

  const getImages = () => {
    setError("");
    axiosInstance
      .post("/api/auth/getPics", {
        objectName: object,
      })
      .then((res) => {
        if (res.data.images.length === 0) {
          setImages([]);
          setError("No images uploaded yet");
        } else setImages(res.data.images);
        console.log(res.data);
      })
      .catch((err) => {
        if (err.response.status === 402) setError("Object not found");
        else setError("Something went wrong...");
      });
    setSnackBarOpen(true);
  };

  useEffect(() => {
    if (images.length > 0) {
      if (images.length === 1) {
        setCount(0);
        document.getElementById("file-0").classList.add("active-file");
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
  }, [images, count]);

  const img_names = images.map((row, i) => {
    const rows = row.split("/");
    return (
      <aside className="single-file" id={`file-${i}`} key={i}>
        {rows[rows.length - 1]}
      </aside>
    );
  });
  // console.log(img_names);

  const statusChange = (e) => {
    setError("");
    setSuccess("");
    let status = "";
    if (e.target.value === "Accept") status = "Accepted";
    else if (e.target.value === "Reject") status = "Rejected";
    axiosInstance
      .post("/api/auth/changeStatus", {
        object,
        status,
      })
      .then(() => {
        setSuccess("Status Changed Successfully!!");
        // console.log(res);
      })
      .catch((err) => {
        // console.log(err);
        if (err.response.status === 402) setError(err.response.data.error);
        else setError("Server isn't working");
      });
    setSnackBarOpen(true);
  };
  const handleDownload = () => {
    // axios
    //   .get(images[count], {
    //     responseType: "blob",
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
    const temporaryDownloadLink = document.createElement("a");
    temporaryDownloadLink.style.display = "none";
    document.body.appendChild(temporaryDownloadLink);
    // console.log(images[count]);
    let imageFileArray = images[count].split("/");
    let imageFile = imageFileArray[imageFileArray.length - 1];
    const download = images[count];
    temporaryDownloadLink.setAttribute("href", download);
    temporaryDownloadLink.setAttribute("download", download);
    temporaryDownloadLink.target = "_blank";
    temporaryDownloadLink.click();
    let file = images[count].replace(".jpg", ".txt");
    let textFile = imageFile.replace(".jpg", ".txt");

    axios.get(file).then((res) => {
      console.log(res);
      const url = URL.createObjectURL(
        new Blob([res.data], { type: "text/plain" })
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", textFile);
      // Append to html link element page
      document.body.appendChild(link);
      // Start download
      link.click();
      // Clean up and remove the link
      link.parentNode.removeChild(link);
    });
  };

  // let interval = setInterval(handleDownload, 300, images);

  const handleClose = (reason) => {
    if (reason === "clickaway") return;
    setSnackBarOpen(false);
  };

  var vertical = "top";
  var horizontal = "center";

  return (
    <div className="add-object">
      <h1>View Images of Object</h1>
      <input
        type="text"
        className="input-object"
        placeholder="Enter Object Name"
        name="email"
        onChange={inputObject}
      />
      <input
        type="button"
        className="get-objects"
        value="Get Images"
        onClick={getImages}
      />
      {images.length ? (
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
            disabled={count >= images.length - 1}
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
          <input
            type="button"
            className="download-button"
            onClick={handleDownload}
            value="Download"
          />
          <input
            type="button"
            className="accept-button"
            onClick={statusChange}
            value="Accept"
          />
          <input
            type="button"
            className="reject-button"
            onClick={statusChange}
            value="Reject"
          />
        </>
      ) : null}
      {images.length ? (
        <div className="files-images">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <strong>Total Images: {images.length} </strong>
            </div>
            <div className="file-names file-margin">{img_names}</div>
          </div>
          <div className="edit-image">
            <ViewImage currImage={images[count]} />
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
    </div>
  );
};

export default ImageControls;
