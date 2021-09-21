import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
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

  const openFile = useCallback(() => {
    if (images.length) {
      let file = images[1].replace(".jpg", ".txt");
      console.log(file);
      axios
        .get(file)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
    //labeller.images
    //eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   setError("");
  //   axios
  //     .post("https://labelling-backend.herokuapp.com/api/auth/getLabeller", {
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
    axios
      .post("https://labelling-backend.herokuapp.com/api/auth/getPics", {
        objectName: object,
      })
      .then((res) => {
        if (res.data.images.length === 0) {
          setImages([]);
          setError("No images uploaded yet");
        } else setImages(res.data.images);
      })
      .catch((err) => {
        if (err.response.status === 402) setError("Object not found");
        else setError("Something went wrong...");
      });
    setSnackBarOpen(true);
  };

  useEffect(() => {
    // count < images.length && images.length && count >= 0
    //   ? setCurrImage(URL.createObjectURL(images[count]))
    //   : setCurrImage(images[initialCount]);
    // console.log(count, "count", images);
    if (images.length > 0) {
      if (images.length === 1) {
        setCount(0);
        document.getElementById("file-0").classList.add("active-file");
        // setCurrImage(URL.createObjectURL(images[0]));
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
  console.log(img_names);

  const handleClose = (reason) => {
    if (reason === "clickaway") return;
    setSnackBarOpen(false);
  };

  var vertical = "top";
  var horizontal = "center";

  return (
    <div className="add-object">
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
        </>
      ) : null}
      {images.length ? (
        <div className="files-images">
          <div className="file-names">{img_names}</div>
          {/* <div className="edit-image">
            {currImage && (
              <EditImage
                currImage={currImage}
                array={array}
                setArray={setArray}
              />
            )}
          </div> */}
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
    </div>
  );
};

export default ImageControls;
