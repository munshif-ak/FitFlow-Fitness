"use client"
import React, { useEffect, useState } from 'react'
import "../../Styles/popularExercise.css";
import {popExercise} from "../Data/popularExercise"

function PopularExercise() {

  const [exerciseItems, setExerciseItems] = useState(2);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setExerciseItems(5);
      } else {
        setExerciseItems(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div style={{width:'95vw',marginTop:'20px'}}>
      <div className="Exercice-title">
        <h4>POPULAR EXERCISE</h4>
        <span style={{ fontSize: "15", fontWeight: "bold" }}>See all</span>
      </div>
      <div className='Exercise-main'>
      {
        popExercise.slice(0,exerciseItems).map((p) => (
            <div className='exercise'>
        <img src={p.img}  height={230} className='img-exercise' />
        <span className='exercise-span1'>{p.title1}</span>
        <span className='exercise-span2'>{p.title2}</span>

      </div>
        ))
      }
      </div>
    </div>
  )
}

export default PopularExercise
