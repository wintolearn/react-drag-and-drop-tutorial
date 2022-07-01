import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import { TouchBackend } from 'react-dnd-touch-backend'
import "../App.css";


const PictureList = [
  {
    id: 1,
    url:
      "https://pngimg.com/uploads/fish/fish_PNG25118.png",
      width:200
  },
  {
    id: 2,
    url:
      "https://cdn.pixabay.com/photo/2017/06/06/13/12/isolated-2377242_1280.png",
      width:200
  },
  {
    id: 3,
    url:
      "https://cdn.pixabay.com/photo/2017/08/31/14/40/fish-2700930_1280.png",
      width:200
  },
];

const orderDropped = []

function DragDrop() {
  const [board, setBoard] = useState([]);
  


  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    
    console.log('last dropped' + orderDropped[orderDropped.length-1])
    if(orderDropped.length>0 && orderDropped[orderDropped.length-1]==1){
      
      pictureList[0].width = 50;
      
    }
    
    pictureList[0].hue="hue-rotate("+180+")"
    setBoard((board) => [...board, pictureList[0]]);
    console.log("image added to board");
    orderDropped.push(pictureList[0].id)
    console.log(orderDropped);


  };
  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} width={picture.width} />;
        })}
      </div>
  
      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} width={picture.width} />;
        })}
       
      </div>

    </>
  );
}

export default DragDrop;
