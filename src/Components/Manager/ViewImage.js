import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

const ViewImage = ({ currImage }) => {
  let ctx = null;
  //   console.log(currImage);
  const canvas = useRef();
  const image = useRef();
  const [r, setR] = useState(null);
  let array = [];

  const onImageLoad = () => {
    const canvasEle = canvas.current;
    const imageEle = image.current;

    canvasEle.width = imageEle.clientWidth;
    canvasEle.height = imageEle.clientHeight;
    // console.log(canvasEle, imageEle);
    ctx = canvasEle.getContext("2d");
    // console.log(ctx);

    setR(ctx);
  };

  useEffect(() => {
    if (currImage) {
      let file = currImage.replace(".jpg", ".txt");
      //   console.log(file);
      axios
        .get(file)
        .then((response) => {
          const strArray = response.data.split(" ");
          for (let i = 1; i < strArray.length; i = i + 4)
            array.push({
              x: parseFloat(strArray[i]),
              y: parseFloat(strArray[i + 1]),
              w: parseFloat(strArray[i + 2]),
              h: parseFloat(strArray[i + 3]),
            });
          console.log(array);
          if (array.length) {
            const style = { borderColor: "black", borderWidth: 2 };
            r.strokeStyle = style.borderColor;
            r.lineWidth = style.borderWidth;
            r.beginPath();
            array.map((item) => {
              console.log(
                image.current.clientWidth,
                image.current.clientHeight
              );
              return r.rect(
                item.x * image.current.clientWidth,
                item.y * image.current.clientHeight,
                item.w * image.current.clientWidth,
                item.h * image.current.clientHeight
              );
            });
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
    //eslint-disable-next-line
  }, [currImage]);

  return (
    <div className="image-area">
      <canvas className="canvas-img" tabIndex="0" ref={canvas} />
      <img
        className="labelling-img"
        src={currImage}
        ref={image}
        onLoad={onImageLoad}
        alt={currImage}
      />
    </div>
  );
};

export default ViewImage;
