import React from "react";
import "./operator.css";

const Operator = () => {
  return (
    <div className="main">
      <div className="mainContainer">
        <div className="operatorContainer">
          <span className="operator">+</span>
        </div>
      </div>

      <div className="mainContainer">
        <div className="operatorContainer">
          <span className="operator">-</span>
        </div>
      </div>

      <div className="mainContainer">
        <div className="operatorContainer">
          <span className="operator">*</span>
        </div>
      </div>

      <div className="mainContainer">
        <div className="operatorContainer">
          <span className="operator">/</span>
        </div>
      </div>

      <div className="gapContainer">
        <div className="gapContainer">
          <span className="operator"></span>
        </div>
      </div>

      <div className="mainContainer">
        <div className="operatorContainer">
          <span className="operator">&lt;</span>
        </div>
      </div>

      <div className="mainContainer">
        <div className="operatorContainer">
          <span className="operator">&gt;</span>
        </div>
      </div>

      <div className="mainContainer">
        <div className="operatorContainer">
          <span className="operator">RHS</span>
        </div>
      </div>
    </div>
  );
};

export default Operator;
