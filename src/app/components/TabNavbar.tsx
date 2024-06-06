"use client";
import React from "react";
import "../../Styles/tabNav.css";
import "../../Styles/popularExercise.css";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { mealPlans } from "../Data/mealPlans";

function TabNavbar() {
  const myStyle = {
    backgroundColor: "lightgrey",
    width: "120px",
    height: "38px",
    outline: "none",
    border: "1px solid white",
    borderRadius: "6px",
    marginLeft: "10px",
  };

  return (
    <div>
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          style={{ width: "95vw"}}
        >
          <Tab key="photos" title="Breakfast" style={myStyle} >
            <Card>
              <CardBody style={{ marginTop: "25px",width: "95vw"}}>
                <h3>15 Meals</h3>
                {mealPlans.map((p) => (
                  <div className="exercise">
                    <img src={p.img} height={230} className="img-exercise" />
                    <span className="exercise-span1">{p.title1}</span>
                    <span className="exercise-span2">{p.title2}</span>
                  </div>
                ))}
              </CardBody>
            </Card>
          </Tab>

          <Tab key="music" title="Lunch" style={myStyle}>
            <Card>
              <CardBody style={{ marginTop: "25px",width: "95vw"}}>
              <h3>10 Meals</h3>
                {mealPlans.map((p) => (
                  <div className="exercise">
                    <img src={p.img} height={230} className="img-exercise" />
                    <span className="exercise-span1">{p.title1}</span>
                    <span className="exercise-span2">{p.title2}</span>
                  </div>
                ))}
              </CardBody>
            </Card>
          </Tab>

          <Tab key="videos" title="Dinner" style={myStyle}>
            <Card>
              <CardBody style={{ marginTop: "25px",width: "95vw"}}>
              <h3>11 Meals</h3>
                {mealPlans.map((p) => (
                  <div className="exercise">
                    <img src={p.img} height={230} className="img-exercise" />
                    <span className="exercise-span1">{p.title1}</span>
                    <span className="exercise-span2">{p.title2}</span>
                  </div>
                ))}
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default TabNavbar;
