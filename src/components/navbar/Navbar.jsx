import React, { useState } from "react";
import "./Navbar.css";

import { image } from "../../assets/index.js";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="logo">
          <img src={image} alt="Tala_Prattoy_image" />
          <h1>Tala Prattoy</h1>
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li className="link">About</li>
          <li className="link">Service</li>
          <li className="link">Album</li>
          <li className="link">Stories</li>
          <li className="link">Blog</li>
          <li className="contact">Contact Us</li>
        </ul>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>
        <button className="btn">Contact Us</button>
      </div>
    </div>
  );
};

export default Navbar;
