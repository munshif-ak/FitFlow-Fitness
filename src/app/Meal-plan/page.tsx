import React from "react";
import TabNavbar from "../components/TabNavbar";
import Calender from "../components/Calender";
import Footer from "../components/Footer";

function page() {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Calender />
      <TabNavbar />
      <Footer/>
    </div>
  );
}

export default page;



// style={{display:'flex',flexDirection:'column',alignItems:'center'}}

