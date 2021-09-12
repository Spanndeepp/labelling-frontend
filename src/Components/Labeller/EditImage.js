import React, { useState, useEffect, useRef } from "react";
import "./EditImage.css";

const EditImage = ({ currImage, edit }) => {
  let ctx = null;
  const canvas = useRef();
  const image = useRef();
  const [xyval, setXY] = useState({ xval: 0, yval: 0 });

  const [r, setR] = useState(null);
  const [array, setArray] = useState([]);
  console.log(array);

  const [draw, setDraw] = useState(false);
  const onImageLoad = () => {
    const canvasEle = canvas.current;
    const imageEle = image.current;

    canvasEle.width = imageEle.clientWidth;
    canvasEle.height = imageEle.clientHeight;
    // console.log(canvasEle, imageEle);
    ctx = canvasEle.getContext("2d");
    console.log(ctx);

    setR(ctx);
  };

  useEffect(() => {
    setArray([]);
  }, [currImage]);

  const drawRect = (e, style = {}) => {
    let rectw = e.pageX - e.nativeEvent.path[0].offsetLeft - xyval.xval;
    let recth = e.pageY - e.nativeEvent.path[0].offsetTop - xyval.yval;
    const { borderColor = "black", borderWidth = 2 } = style;
    r.clearRect(0, 0, image.current.clientWidth, image.current.clientHeight);

    let data = {
      x: xyval.xval / image.current.clientWidth,
      y: xyval.yval / image.current.clientHeight,
      w: rectw,
      h: recth,
    };
    console.log(data);
    setArray([...array, data]);

    r.strokeStyle = borderColor;
    r.lineWidth = borderWidth;
    r.beginPath();
    array.map((item) => {
      return r.rect(
        item.x * image.current.clientWidth,
        item.y * image.current.clientHeight,
        item.w,
        item.h
      );
    });
    r.rect(xyval.xval, xyval.yval, rectw, recth);

    r.stroke();
    r.closePath();
  };
  const moveRect =
    (r) =>
    (e, style = {}) => {
      if (draw) {
        let rectw = e.pageX - e.nativeEvent.path[0].offsetLeft - xyval.xval;
        let recth = e.pageY - e.nativeEvent.path[0].offsetTop - xyval.yval;
        const { borderColor = "black", borderWidth = 2 } = style;
        r.clearRect(
          0,
          0,
          image.current.clientWidth,
          image.current.clientHeight
        );

        r.strokeStyle = borderColor;
        r.lineWidth = borderWidth;
        r.beginPath();

        r.rect(xyval.xval, xyval.yval, rectw, recth);
        console.log(xyval.xval, xyval.yval, rectw, recth);
        r.stroke();
      }
    };

  const init = (e) => {
    setXY({
      xval: e.pageX - e.nativeEvent.path[0].offsetLeft,
      yval: e.pageY - e.nativeEvent.path[0].offsetTop,
    });

    setDraw(true);
  };

  const endit = (e) => {
    r.closePath();
    setDraw(false);
    drawRect(e);
  };

  return (
    <div>
      <img
        className="labelling-img"
        src={currImage}
        ref={image}
        onLoad={onImageLoad}
        alt="Phone"
        width="400px"
      />
      <canvas
        className="canvas"
        ref={canvas}
        onMouseMove={(e) => {
          moveRect(r)(e);
        }}
        onMouseDown={(e) => init(e)}
        onMouseUp={(e) => {
          endit(e);
        }}
      />
    </div>
  );
};

export default EditImage;
