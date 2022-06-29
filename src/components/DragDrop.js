import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";

const PictureList = [
  {
    id: 1,
    url:
      "https://pngimg.com/uploads/fish/fish_PNG25118.png",
  },
  {
    id: 2,
    url:
      "https://cdn.pixabay.com/photo/2017/06/06/13/12/isolated-2377242_1280.png",
  },
  {
    id: 3,
    url:
      "https://cdn.pixabay.com/photo/2017/08/31/14/40/fish-2700930_1280.png",
  },
];

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
    setBoard((board) => [...board, pictureList[0]]);
  };
  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
  
      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
       
      </div>

    </>
  );
}

export default DragDrop;
