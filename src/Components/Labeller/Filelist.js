import React from "react";

function Filelist({ selectedFiles }) {
  //   console.log("Line4", selectedFiles[0].name);
  const fileNames = [];

  for (let i = 0; i < selectedFiles.length; i++) {
    fileNames.push(<div key={i}>{selectedFiles[i].name}</div>);
  }

  return (
    <div>
      {fileNames}
      <br />
    </div>
  );
}

export default Filelist;
