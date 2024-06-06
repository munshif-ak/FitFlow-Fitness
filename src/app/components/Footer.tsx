import React from "react";
import "../../Styles/footer.css";
import HomeIcon from "./HomeIcon";
import MealPlanIcon from "./MealPlanIcon";
import ExerciseIcon from "./ExerciseIcon";
import ProfileIcon from "./ProfileIcon";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer-container">
      <Link href={'/Home'}>
        <HomeIcon />
      </Link>
      <Link href="/Meal-plan">
        <MealPlanIcon />
      </Link>
      <Link href="/category">
        <ExerciseIcon />
      </Link>
      <Link href={''}>
        <ProfileIcon />
      </Link>
    </div>
  );
}

export default Footer;
