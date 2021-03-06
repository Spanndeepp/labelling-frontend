import React, { useEffect, useState, useRef } from "react";
import EditImage from "../EditImage/EditImage";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import DoneIcon from "@material-ui/icons/Done";
import axiosInstance from "../../AxiosInstance/AxiosInstance";
import "./ImageShow.css";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

function ImageShow({
  selectedFiles,
  initialCount,
  email,
  obj_assigned,
  setImagesUploaded,
}) {
  const [currImage, setCurrImage] = useState(selectedFiles[initialCount]);
  const [count, setCount] = useState(initialCount);
  const [prevCount, setPrevCount] = useState(initialCount);
  const [array, setArray] = useState([]);
  const [error, setError] = useState("");
  const uploaded = useRef([]);
  const [success, setSuccess] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  // const [seq, setSeq] = useState(null);

  useEffect(() => {
    uploaded.current = new Array(selectedFiles.length).fill(false);
    // console.log(uploaded.current);
  }, [selectedFiles]);

  // console.log(selectedFiles[count]);

  // useEffect(() => {
  //   setError("");
  //   obj_assigned && axios
  //     .post("https://labelling-tool-backend.herokuapp.com/api/auth/getOneObject", {
  //       objectName: obj_assigned,
  //     })
  //     .then((res) => {
  //       setSeq(res.data.object.seq);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       setError(err.response.data.error);
  //       console.log(err.response);
  //     });
  //   // setSnackBarOpen(true);
  //   //eslint-disable-next-line
  // }, [obj_assigned]);

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
  // console.log("Hello", count, prevCount);
  const fileNames = [];

  for (let i = 0; i < selectedFiles.length; i++) {
    fileNames.push(
      <aside className="single-file" id={`file-${i}`} key={i}>
        {uploaded.current[i] ? <DoneIcon /> : null} {selectedFiles[i].name}
      </aside>
    );
  }

  const handleUpload = () => {
    // console.log(seq);
    let resultArr = "";
    array.map((a) => {
      return (resultArr +=
        0 + " " + a.x + " " + a.y + " " + a.w + " " + a.h + "\n");
    });
    // console.log(resultArr);
    const blob = new Blob([resultArr], {
      type: "text/plain",
    });
    // const element = document.createElement("a");
    // element.href = URL.createObjectURL(file);
    // element.download = "myFile.txt";
    // document.body.appendChild(element); // Required for this to work in FireFox
    // element.click();
    const file = new File(
      [blob],
      selectedFiles[count].name.replace("jpg", "txt"),
      { type: "text/plain" }
    );
    const formData = new FormData();
    formData.append("email", email);
    formData.append("obj_assigned", obj_assigned);
    formData.append("image", selectedFiles[count]);
    formData.append("text", file);

    setSuccess("");
    setError("");
    axiosInstance
      .post("/api/upload/object", formData)
      .then((res) => {
        setSuccess("Object Uploaded");
        uploaded.current[count] = true;
        setImagesUploaded((prevImagesUploaded) => prevImagesUploaded + 1);
      })
      .catch((err) => {
        if (error.response.status === 500)
          setError("Images type accepted is .jpg only...");
        else setError("Something went wrong...");
      });
    setSnackBarOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") return;
    setSnackBarOpen(false);
  };

  var vertical = "top";
  var horizontal = "center";

  // const TextFile = () => {

  // };

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
      {/* {currImage && (
        <input type="button" onClick={TextFile} value="Get Text File" />
      )} */}
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
