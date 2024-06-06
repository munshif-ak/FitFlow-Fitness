"use client"
import React, { useEffect, useState } from "react";
import "../../Styles/categoreis.css";
import { CategoriesItem } from "../Data/categories";
import Link from "next/link";

function Categories() {

  const [visibleItems, setVisibleItems] = useState(4);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setVisibleItems(6);
      } else {
        setVisibleItems(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
    <div className="category-main">
      <div className="categorie-title">
        <h4>CATEGORY</h4>
        <Link href={'/category'}  style={{ fontSize: "15", fontWeight: "bold",textDecoration:'none',color:"black"}}>See all</Link>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {CategoriesItem.slice(0, visibleItems).map((c: any) => {
          return (
            <div className="categories">
              <img src={c.image} width={70} height={70} />
              <span style={{ marginTop: "5px" }}>{c.title}</span>
            </div>
          );
        })}
      </div> 
    </div>
  );
}

export default Categories;
