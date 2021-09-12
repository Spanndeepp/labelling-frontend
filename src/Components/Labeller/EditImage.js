import React from "react";

const EditImage = ({ currImage }) => {
  return (
    <div>
      <img
        className="labelling-img"
        src={currImage}
        alt="Phone"
        width="400px"
      />
    </div>
  );
};

export default EditImage;
