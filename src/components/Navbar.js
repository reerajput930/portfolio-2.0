import React, { useState, useEffect } from "react";
import "../index.css";
import style from "./Navbar.module.css"

import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  // solve the bug - prev navbar not closing for new navbar

  return (
    <div className={style.bigScreenNavbar}>
      <div
        style={{
          width: "-webkit-fill-available",
          display: " flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* {isMenuOpen && ( */}
          <nav className={`myDiv ${isMenuOpen ? 'show' : ''}`} >
            <div className="navbar-menu">
              <ul style={{ display: "flex",flexDirection:"column" }} className={style.ulstyle}>
                {/* <Link to="/">
                      <li>HOME</li>
                    </Link> */}
                <li>
                  <a href="#about"> <h2><span className={style.colored}>01.</span> About</h2></a>
                </li>
                <li>
                  <a href="#skills--section"> <h2><span className={style.colored}>02.</span>Skills</h2></a>
                </li>
                <li>
                  <a href="#experence"> <h2><span className={style.colored}>03.</span>Experience</h2></a>
                </li>
                <li>
                  <a href="#projects"> <h2><span className={style.colored}>04.</span>Projects</h2></a>
                </li>
                
              </ul>
            </div>
          </nav>
        {/* )} */}

  
      </div>

      <div className="navbar-toggle" onClick={handleMenuToggle}>
        <div className={`bar `}></div>
        <div className={`bar `} style={{ width: "25px" }}></div>
        <div className={`bar `} style={{ width: "12px" }}></div>
      </div>
    </div>
  );
}
