import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useDrag, useDrop } from "react-dnd";


function Picture({ id, url, width }) {

  const imageRef = useRef();

  useEffect(() => {
    gsap.to(drag.current, { rotation: "+=60" });
  });
  
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  /*
  const [{ didDrop }, drop] = useDrop(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      didDrop: !!monitor.didDrop(),
    }),
  }));
*/

  return (
    <img
      ref={drag}
      src={url}
      width={width}
      
      height="150px"
      style={{ 
        border: isDragging ? "5px solid lightblue" : "0px", 
        opacity: isDragging ? 10:50,
        borderradius: isDragging ? 10:50,
        filter: isDragging? "hue-rotate(90deg)":""
      
      }}
      
    />
  );
}

export default Picture;
