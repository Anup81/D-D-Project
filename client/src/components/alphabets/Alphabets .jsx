import React from "react";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./alphabets.css";

const Alphabets = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="alphabetsContainer">
          <span className="alphabets">A</span>
        </div>
      </div>
      <div className="container">
        <div className="alphabetsContainer">
          <span className="alphabets">B</span>
        </div>
      </div>
      <div className="container">
        <div className="alphabetsContainer">
          <span className="alphabets">C</span>
        </div>
      </div>
      <div className="container">
        <div className="alphabetsContainer">
          <span className="alphabets">D</span>
        </div>
      </div>
      <div className="container">
        <div className="alphabetsContainer">
          <span className="alphabets">E</span>
        </div>
      </div>
    </div>
  );
};

export default Alphabets;
