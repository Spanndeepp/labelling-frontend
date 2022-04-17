import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";

if (process.env.NODE_ENV !== "development") {
  console.log = () => {};
  console.error = () => {};
}

ReactDOM.render(<App />, document.getElementById("root"));
