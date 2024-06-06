import React from "react";
import "../../Styles/additionalExercise.css";
import img from "../../../public/images/images-removebg-preview 1.png"
import {addExercise} from "../Data/additionalExercise"

function AdditionalExercise() {
  return (
    <div style={{ width: "95vw", marginTop: "20px" }}>
      <div className="Exercice-title">
        <h4>ADDITIONAL EXERCISE</h4>
        <span style={{ fontSize: "15", fontWeight: "bold" }}>See all</span>
      </div>

      {
        addExercise.map((a) => (
            <div className="addi-exercise">  
         <div className="add-img-box" style={{backgroundColor:a.color}}>
            <img src={a.img} width={100} height={100}  className="addi-exercise-img"/>
         </div>
         <div className="addi-exercise2">
            <span className="exercise-span1" style={{maxWidth:"150px"}}>{a.title1}</span>
            <span className="exercise-span2" style={{marginTop:'10px'}}>{a.title2}</span>
            <span className="exercise-span2" style={{marginTop:'8px'}}>{a.title3}</span>
         </div>
      </div>
        ))
      }
      <div style={{color:'white'}}>.......</div>
      <div style={{color:'white'}}>.......</div>
      <div style={{color:'white'}}>.......</div>
      <div style={{color:'white'}}>.......</div>

    </div>
  );
}

export default AdditionalExercise;
