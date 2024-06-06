import React from "react";
import PathIcon from "../components/PathIcon";
import "../../Styles/categoreis.css";
import img from "../../../public/images/Ellipse 214.jpg"
import {CategoriesItem} from "../Data/categories"
import Footer from "../components/Footer";
import Link from "next/link";

function page() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="cate-page-title">
        <Link href={'/Home'}>
        <PathIcon />
        </Link>
        <h2 style={{ marginLeft: "133px" }}>CATEGORIES</h2>
      </div>
      <div className="text-field-cate-page">
        <input
          type="text"
          className="search-box-cate-page"
          placeholder="Search"
        />
      </div>

      <div className="catePage3">
        {
          CategoriesItem.map((c)=>(
            <Link href={`/category/${c.id}`} className="catePage2">
          <img src={c.image} width={140} height={140} style={{objectFit:'contain'}} />
          <span style={{fontSize:'17px',fontWeight:'bold',marginTop:'15px'}}>{c.title}</span>
        </Link>

          ))
        }
        
      </div>
      <Footer/>
    </div>
  );
}

export default page;
