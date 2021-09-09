import React, { useEffect, useState } from "react";

function ImageShow({ selectedFiles }) {
  const [currImage, setCurrImage] = useState(null);
  const [currImageNo, setCurrImageNo] = useState(0);
  console.log("ImageShow", currImageNo);

  useEffect(() => {
    currImageNo < selectedFiles.length && selectedFiles.length
      ? setCurrImage(URL.createObjectURL(selectedFiles[currImageNo]))
      : setCurrImage(null);
    return () => {};
  }, [selectedFiles, currImageNo]);

  return (
    <div>
      <input
        type="button"
        onClick={() => setCurrImageNo(currImageNo + 1)}
        value="Next"
      />
      <img src={currImage} alt="Phone" width="400px" />
    </div>
  );
}

export default ImageShow;
