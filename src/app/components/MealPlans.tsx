"use client"
import React, { useEffect, useState } from 'react'
import "../../Styles/popularExercise.css";
import {mealPlans} from "../Data/mealPlans";

function MealPlans() {

  const [mealsItems, setMealsItems] = useState(2);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMealsItems(3);
      } else {
        setMealsItems(2);
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
        <h4>MEAL PLAN</h4>
        <span style={{ fontSize: "15", fontWeight: "bold" }}>See all</span>
      </div>
      <div className='Exercise-main'>
      {
        mealPlans.slice(0,mealsItems).map((p) => (
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

export default MealPlans
