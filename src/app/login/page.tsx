"use client"
import React from 'react'
import PathIcon from '../components/PathIcon'
import "../../Styles/splash.css";
import "../../Styles/login.css"
import GoogleIcon from '../components/GoogleIcon'
import Facebook from '../components/Facebook'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Header from '../components/Header'
import img from "../../../public/images/12953573_Data_security_05.jpg"

function page() {

  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/costomerDetails');
  };
  return (
    <>
    <div className="splash-header"><Header/></div>
    <div className='loginPage-container'> 
      <div className='login-pathIcon'><PathIcon/></div>
      <h2 className='login-heading'>WELCOME TO PRO FITNESS</h2>
      <span className='login-hello'>Hello there, sign in to continue!</span>
      <img src={img.src} width={700} height={600} className='login-img'/>

      <div className='loginPage-2container'>
        <span style={{fontSize:'18px',}}>Email address</span>
        <input type='text' className='login-textBox'/>
        <span style={{fontSize:'18px', marginTop:'10px'}}>Password</span>
        <input type='text' className='login-textBox'/>
        <span className='login-forgot'>Forgot Password?</span>
      </div>

      <button className='login-button' onClick={handleLoginClick}>LOGIN</button>
      <span className='login-logiWith'>Or Login With</span>
      <button className='google-button'><GoogleIcon/>  Connect With Google</button>
      <button className='facebook-button'><Facebook/>  Connect With Facebook</button>

      <span className='register'>Don't have an a account?<Link  href={"/signUp"} style={{fontWeight:'600',color:'black'}}>Register!</Link></span>
    </div>
    </>
    
  )
}

export default page
