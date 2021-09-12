import React, { useEffect, useState, useReducer } from "react";
import EditImage from "./EditImage";
import "./ImageShow.css";

function ImageShow({ selectedFiles, initialCount }) {
  const [currImage, setCurrImage] = useState(selectedFiles[initialCount]);
  const [edit, setEdit] = useState(false);
  const initialState = { count: initialCount };
  // const [currImageNo, setCurrImageNo] = useState(0);

  // const currImageNo = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log("ImageShow", selectedFiles.length, state.count);

  useEffect(() => {
    state.count < selectedFiles.length &&
    selectedFiles.length &&
    state.count >= 0
      ? setCurrImage(URL.createObjectURL(selectedFiles[state.count]))
      : setCurrImage(null);
    return () => {};
  }, [selectedFiles, state.count]);

  return (
    <>
      <div>
        <input
          type="button"
          onClick={() => dispatch({ type: "decrement" })}
          value="Previous"
          disabled={state.count === 0}
        />
        <input
          type="button"
          onClick={() => dispatch({ type: "increment" })}
          value="Next"
          disabled={state.count >= selectedFiles.length - 1}
        />
        <button
          onClick={() => dispatch({ type: "reset" })}
          disabled={state.count === 0}
        >
          Reset
        </button>
        <input
          type="button"
          onClick={() => {
            !edit ? setEdit(true) : setEdit(false);
            console.log(edit);
          }}
          value={edit ? "Save Selection" : "Select"}
        />
      </div>
      {currImage && <EditImage currImage={currImage} edit={edit} />}
    </>
  );
}

export default ImageShow;
