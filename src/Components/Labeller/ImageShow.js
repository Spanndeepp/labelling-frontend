import axios from "axios";
import React, { useEffect, useState } from "react";
import EditImage from "./EditImage";
import "./ImageShow.css";

function ImageShow({ selectedFiles, initialCount }) {
  const [currImage, setCurrImage] = useState(selectedFiles[initialCount]);
  const [count, setCount] = useState(initialCount);
  const [array, setArray] = useState([]);
  // const [currImageNo, setCurrImageNo] = useState(0);

  // const currImageNo = { count: 0 };

  // function reducer(state, action) {
  //   switch (action.type) {
  //     case "increment":
  //       return { count: state.count + 1 };
  //     case "decrement":
  //       return { count: state.count - 1 };
  //     case "reset":
  //       return { count: 0 };
  //     default:
  //       throw new Error();
  //   }
  // }

  // const [state, dispatch] = useReducer(reducer, initialState);
  // console.log("ImageShow", selectedFiles.length, state.count);

  useEffect(() => {
    count < selectedFiles.length && selectedFiles.length && count >= 0
      ? setCurrImage(URL.createObjectURL(selectedFiles[count]))
      : setCurrImage(null);
    console.log(count, "count");
    if (count >= 0) {
      document.getElementById(`file-${count}`).classList.add("active-file");
      if (count + 1 < selectedFiles.length) {
        document
          .getElementById(`file-${count + 1}`)
          .classList.remove("active-file");
      }
      if (count - 1 >= 0) {
        document
          .getElementById(`file-${count - 1}`)
          .classList.remove("active-file");
      }
    }
  }, [selectedFiles, count]);
  console.log("Hello", array);
  const fileNames = [];

  for (let i = 0; i < selectedFiles.length; i++) {
    fileNames.push(
      <aside className="single-file" id={`file-${i}`} key={i}>
        {selectedFiles[i].name}
      </aside>
    );
  }

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", selectedFiles[count]);
    axios
      .post(
        "https://labelling-backend.herokuapp.com/api/upload/uploadImage",
        formData
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <>
      <input
        type="button"
        className="image-controls previous-button"
        onClick={() => setCount(count - 1)}
        value="Previous"
        disabled={count === 0}
      />
      <input
        type="button"
        className="image-controls"
        onClick={() => setCount(count + 1)}
        value="Next"
        disabled={count >= selectedFiles.length - 1}
      />
      <input
        type="button"
        className="image-controls"
        onClick={() => setCount(0)}
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
    </>
  );
}

export default ImageShow;
