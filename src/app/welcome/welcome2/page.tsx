import React from 'react'
import "../../../Styles/splash.css";
import img from "../../../../public/images/Mask group.png";
import Link from 'next/link';

function page() {
  return (
    <div className='welcome-page'>
      <img src={img.src} style={{marginBottom:'40px'}} />
      <span className='spalsh-title1' style={{lineHeight: '8px',fontSize:'32px',fontWeight:'bold'}}>SHOT STRONG</span>
      <div style={{ display: "flex", marginTop: "15px" }}>
      <span className='spalsh-title' style={{lineHeight: '40px',fontSize:'32px',fontWeight:'bold'}}>TIMELESS</span>
      </div>
      <span className='spalsh-title1' style={{lineHeight: '40px',fontSize:'32px',fontWeight:'bold',marginBottom:'100px'}}>WOMEN TRAINING</span>
      <div className='welcome-bottom'>
        <Link href={'/welcome/welcome3'} className='welcome-bottom-Link'>SKIP</Link>
        <Link href={'/welcome/welcome3'} className='welcome-bottom-Link'>NEXT</Link>
      </div>
    </div>
  )
}

export default page
