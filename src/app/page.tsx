import Image from "next/image";
import "../Styles/splash.css";
import img from "../../public/images/Group 56527.png";
import Link from "next/link";
import Header from "./components/Header";

export default function Home() {

  return (
    <>
    <div className="splash-header"><Header/></div>
    <div className="splash-main-container " >
      <img src={img.src} width={407}  className="splash-img"/>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <div style={{ display: "flex", marginTop: "15px"}}>
        <h1 className="spalsh-title1">PRO</h1>
        <h1 className="spalsh-title">FITNESS</h1>
      </div>
      <span>We train your body to be</span>
      <span>great and fit</span>
      <button  className="splash-button">
        <Link href={"/welcome"} style={{textDecoration:'none',color:'white'}}>LET'S START</Link>
      </button>
      </div>
    </div>
    </>
  );
}
