import React from "react";
import "../../Styles/header.css";

function Header() {
  const head = [
    { link: "HOME" },
    { link: "MEAL PLANS" },
    { link: "EXERCISE" },
    { link: "PROFILE" },
  ];
  return (
    <>
      <div
        style={{ width: "100vw", height: "170px", backgroundColor: "#b0c929" }}
        className="header-container1"
      ></div>
      <div className="header-container">
        <div className="text-field">
          <input type="text" className="search-box" placeholder="Search" />
        </div>
        <div className="lap-head">
          {head.map((h) => (
            <span>{h.link}</span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Header;

{
  /* <input type='text' className='text-field' placeholder='Search'  /> */
}
