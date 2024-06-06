import React from 'react'
import "../../Styles/splash.css";
import img from "../../../public/images/Group 56528.png";
import Link from 'next/link';

function page() {
  return (
    <div className='welcome-page'>
      <img src={img.src} style={{marginBottom:'40px'}} />
      <span className='spalsh-title1' style={{lineHeight: '8px',fontSize:'32px',fontWeight:'bold'}}>PERFECT BODY</span>
      <div style={{ display: "flex", marginTop: "15px" }}>
      <span className='spalsh-title1' style={{lineHeight: '40px',fontSize:'32px',fontWeight:'bold'}}>DOING</span>
      <span className='spalsh-title' style={{lineHeight: '40px',fontSize:'32px',fontWeight:'bold'}}>CROSSFIT</span>
      </div>
      <span className='spalsh-title1' style={{lineHeight: '40px',fontSize:'32px',fontWeight:'bold',marginBottom:'100px'}}>EXERCISES</span>
      <div className='welcome-bottom'>
        <Link href={'/welcome/welcome2'} className='welcome-bottom-Link'>SKIP</Link>
        <Link href={'/welcome/welcome2'} className='welcome-bottom-Link'>NEXT</Link>
      </div>
    </div>
  )
}

export default page
