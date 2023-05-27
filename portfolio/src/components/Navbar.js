import React, { useState, useEffect } from "react";
import "../index.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  // solve the bug - prev navbar not closing for new navbar

  return (
    <div>
      <div
        style={{
          width: "-webkit-fill-available",
          display: " flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isMenuOpen && (
          <nav>
            <div className="navbar-menu">
              <ul style={{ display: "flex" }}>
                <Link to="/">
                      <li>HOME</li>
                    </Link>
                <li>
                  <a href="#me">ME</a>
                </li>
                <li>
                  <a href="#skills">SKILLS</a>
                </li>
                <li>
                  <a href="#pro">PROJECTS</a>
                </li>
                <li>
                  <a href="#experence">EXPERENCE</a>
                </li>
                <li>
                  <a href="#contact">CONTACT</a>
                </li>
              </ul>
            </div>
          </nav>
        )}

        {/* {isMenuOpen && !atHome && (
        <nav>
          <div className="navbar-menu">
            <ul style={{ display: "flex" }}>
              
            </ul>
          </div>
        </nav>
      )} */}
      </div>

      <div className="navbar-toggle" onClick={handleMenuToggle}>
        <div className={`bar `}></div>
        <div className={`bar `} style={{ width: "25px" }}></div>
        <div className={`bar `} style={{ width: "12px" }}></div>
      </div>
    </div>
  );
}
