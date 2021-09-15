import React, { useEffect } from "react";
import axios from "axios";

const ShowObj = () => {
  useEffect(() => {
    axios
      .get("https://labelling-backend.herokuapp.com/api/auth/getObject")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return (
    <div className="add-object">
      <h1>Show Objects</h1>
    </div>
  );
};

export default ShowObj;
