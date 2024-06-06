"use client"
import React from 'react'
import PathIcon from '../components/PathIcon'
import "../../Styles/login.css"
import GoogleIcon from '../components/GoogleIcon'
import Facebook from '../components/Facebook'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import img from "../../../public/images/6310507.jpg";
import Header from '../components/Header'
function page() {

    const router = useRouter();

    const handleLoginClick = () => {
      router.push('/login');
    };

  return (
    <>
    <div className="splash-header"><Header/></div>
    <div className='loginPage-container'>
      <div className='login-pathIcon'><PathIcon/></div>
      <h2 className='login-heading'>PLEASE CREATE A ACCOUNT</h2>
      <span className='login-hello'>pls enter your credential to proceed</span>
      <img src={img.src} width={700} height={600} className='login-img'/>

      <div className='loginPage-2container'>
      <span style={{fontSize:'18px'}}>Full Name</span>
        <input type='text' className='login-textBox'/>
        <span style={{fontSize:'18px',marginTop:'10px'}}>Phone</span>
        <input type='text' className='login-textBox'/>
        <span style={{fontSize:'18px',marginTop:'10px'}}>Email address</span>
        <input type='text' className='login-textBox'/>
        <span style={{fontSize:'18px', marginTop:'10px'}}>Password</span>
        <input type='text' className='login-textBox'/>
      </div>

      <button className='login-button' onClick={handleLoginClick}>CREATE ACCOUNT</button>
      <span className='login-logiWith'>Or Register With</span>
      <button className='google-button'><GoogleIcon/>  Connect With Google</button>
      <button className='facebook-button'><Facebook/>  Connect With Facebook</button>

      <span style={{marginTop:"60px",alignSelf:"center",marginRight:"20px"}}>Already have an account?<Link href={"/login"} style={{fontWeight:'600',color:'black'}}>Login!</Link></span>
    </div>
    </>
  )
}

export default page
