import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import GoalType from '../components/GoalType'
import Categories from '../components/Categories'
import PopularExercise from '../components/PopularExercise'
import MealPlans from '../components/MealPlans'
import AdditionalExercise from '../components/AdditionalExercise'
import Footer from '../components/Footer'

function page() {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Header/>
      <Banner/>
      <GoalType/>
      <Categories/>
      <PopularExercise/>
      <MealPlans/>
      <AdditionalExercise/>
      {/* <Footer/> */}
    </div>
  )
}

export default page
