"use client";
import React, { useState } from "react";
import "./navbar.css";
import PhoneNav from "./PhoneNav";

function Navbar() {
  const [showNavlink, setShowNavlink] = useState(false);
  return (
    <div className="nav-cont">
      <div
        className="brgr"
        onClick={() => {
          setShowNavlink(!showNavlink);
        }}
      >
        {showNavlink ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars brgr"></i>
        )}
      </div>
      {showNavlink && <PhoneNav />}

      <div className="nav-links">
        <a>Works</a>
        <a>Blog</a>
        <a>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
