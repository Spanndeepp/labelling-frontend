import React, { useEffect, useState, useReducer } from "react";
import "./ImageShow.css";

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

function ImageShow({ selectedFiles, initialCount }) {
  const [currImage, setCurrImage] = useState(null);
  // const [currImageNo, setCurrImageNo] = useState(0);

  // const currImageNo = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialCount);
  console.log("ImageShow", selectedFiles.length, state.count);

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
      </div>
      <img
        className="labelling-img"
        src={currImage}
        alt="Phone"
        width="400px"
      />
    </>
  );
}

export default ImageShow;