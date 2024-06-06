"use client"
import React from 'react'
import "../../Styles/login.css"
import "../../Styles/splash.css"
import img from "../../../public/images/Mask group.png"
import { useRouter } from 'next/navigation'
import Header from '../components/Header'

function page() {
    const router = useRouter()
    const handleClick = () =>{
        router.push('/Home')
    }

  return (
    <>
    <div className="splash-header"><Header/></div>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <h2 style={{marginTop:'120px'}}>LET'S GET STARTED</h2>
      <span style={{fontSize:'large',color:'grey'}}>The Standard Chunk Of Lorem Ipsum</span>
      <span style={{fontSize:'large',color:'grey'}}>Used Since The 1500s is Reproduced Below</span>
      <span style={{fontSize:'large',color:'grey'}}> For Those Intrested</span>
      <img src={img.src} />
      <span style={{fontSize:'20px',color:'black',fontWeight:'600',marginTop:'60px'}}>Sculpt Your Ideal Body,Free Your</span>
      <span style={{fontSize:'20px',color:'black',fontWeight:'600'}}> True Self,Transform Your Life.</span>
      <button className='login-button' style={{marginTop:'95px'}} onClick={handleClick}>GET STARTED!</button>
    </div >
    </>
  )
}

export default page
