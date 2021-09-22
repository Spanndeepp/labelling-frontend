import React from "react";
import ss from "../../images/ss.PNG";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* great functionality */}
      <div className="gf__container">
        {/* great functionality text */}
        <div className="gft__container">
          <h1 className="gft__heading">Great Functionality</h1>
          <div className="gft__text">
            This application has been developed to work as a web alternative for
            YOLO model detection application which has been developed in Python.
            Label your images here and get them checked here itself. <br />
            <br />
            <br />
            Developed by Aditya Khandelwal
          </div>
        </div>

        {/* great functionality text image */}
        <div className="gfi__container">
          <img className="gfi__image" src={ss} alt="" />
        </div>
      </div>

      <footer className="footer">
        <p>
          Developed by: Aditya Khandelwal <br /> Contact - +91 - 9929846577
          &nbsp; &nbsp; adityakhandelwal4201@gmail.com
        </p>
      </footer>
    </>
  );
};

export default Home;
