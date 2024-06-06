"use client";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import "../../Styles/splash.css";
import "../../Styles/login.css";
import Header from "../components/Header";
import img from "../../../public/images/12953573_Data_security_05.jpg";

function page() {
  const title = [
    { quest: "HOW OLD ARE YOU?", label: "Age" },
    { quest: "HOW MUCH DO YOU WEIGHT?", label: "Weight" },
    { quest: "WHAT IS YOUR GOAL WEIGHT?", label: "Weight" },
    { quest: "HOW MUCH DO YOU HEIGHT?", label: "Height" },
  ];

  const [fitnessLevel, SetfitnessLevel] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    SetfitnessLevel(event.target.value as string);
  };

  const [Goal, SetGoal] = React.useState("");

  const handleChangeGoal = (event: SelectChangeEvent) => {
    SetGoal(event.target.value as string);
  };

  const router = useRouter();
  const handleClick = () => {
    router.push("/getStarted");
  };
  return (
    <>
    <div className="splash-header"><Header/></div>
    <div className="costomerDetail-container">
      <h2>Pls Fill the Questions</h2>
      <img src={img.src} width={700} height={600} className='login-img'/>
      <div className="costomerDetail-container2">
        {title.map((t) => (
          <>
            <h3
              style={{
                marginTop: "40px",
                marginLeft: "19px",
                marginBottom: "3px",
              }}
            >
              {t.quest}
            </h3>
            <TextField
              id="standard-basic"
              label={t.label}
              variant="standard"
              className="search-input"
            />
          </>
        ))}

        <h3 style={{ marginTop: "70px", marginLeft: "19px" }}>
          WHAT'S YOUR FITNESS LEVEL
        </h3>
        <FormControl style={{ width: "370px", marginLeft: "32px" }}>
          <InputLabel id="demo-simple-select-label">pls select</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={fitnessLevel}
            label="select"
            onChange={handleChange}
          >
            <MenuItem value={10}>Beginner</MenuItem>
            <MenuItem value={20}>Intermediate</MenuItem>
            <MenuItem value={30}>Advanced</MenuItem>
          </Select>
        </FormControl>

        <h3 style={{ marginTop: "50px", marginLeft: "19px" }}>
          WHAT'S YOUR GOAL
        </h3>
        <FormControl style={{ width: "370px", marginLeft: "32px" }}>
          <InputLabel id="demo-simple-select-label">pls select</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Goal}
            label="select"
            onChange={handleChangeGoal}
          >
            <MenuItem value={10}>weight loss</MenuItem>
            <MenuItem value={20}>Gain muscul</MenuItem>
            <MenuItem value={30}>Improve fitness</MenuItem>
          </Select>
        </FormControl>

        <button
          className="login-button"
          style={{ marginLeft: "22px" }}
          onClick={handleClick}
        >
          SAVE & CONTINNUE
        </button>
      </div>
    </div>
    </>
  );
}

export default page;
