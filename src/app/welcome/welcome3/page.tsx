import React from 'react'
import "../../../Styles/splash.css";
import img from "../../../../public/images/mkm 1.png";
import Link from 'next/link';

function page() {
  return (
    <div className='welcome3-page'>
      <img src={img.src} style={{marginBottom:'40px'}} />
      <span className='spalsh-title1' style={{lineHeight: '8px',fontSize:'32px',fontWeight:'bold'}}>HEALTH MUSCULAR</span>
      <div style={{ display: "flex", marginTop: "15px" }}>
      <span className='spalsh-title' style={{lineHeight: '40px',fontSize:'32px',fontWeight:'bold'}}>SPORTS WOMEN</span>
      </div>
      <span className='spalsh-title1' style={{lineHeight: '40px',fontSize:'32px',fontWeight:'bold',marginBottom:'100px'}}>STANDING</span>
      <div className='welcome-bottom'>
        <Link href={'/login'} className='welcome-bottom-Link'>SKIP</Link>
        <Link href={'/login'} className='welcome-bottom-Link'>NEXT</Link>
      </div>
    </div>
  )
}

export default page
