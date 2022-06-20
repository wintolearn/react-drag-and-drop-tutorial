import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";

const PictureList = [
  {
    id: 1,
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5oaUIcAAEZGjYh8mjGlYl5eDY0NH0WJhww&usqp=CAU",
  },
  {
    id: 2,
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaDdOBOrpvCKazRG_FKR1F2oYt9aeOPhzJsw&usqp=CAU",
  },
  {
    id: 3,
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxG7UdY3xFegM5WTUqifDgvT8DdpDnGndJ5g&usqp=CAU",
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
      <div>
        <table>
      <tr>
        <td>
      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
       
      </div>
      </td>
      <td>
      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
       
      </div>
      </td>
      </tr>
      </table>
      </div>
    </>
  );
}

export default DragDrop;
