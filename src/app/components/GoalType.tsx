import React from "react";
import "../../Styles/goalType.css";
import { goalType } from "../Data/goalType";

function GoalType() {
  return (
    <div style={{ width: "95vw", marginTop:'20px' }}>
      <h4>SELECT YOUR GOAL</h4>
      <div className="type-main-container">
        {
            goalType.map((g) =>(
                <div className="type-container">{g.type}</div>
            ))
        }
      </div>
    </div>
  );
}

export default GoalType;
