import React from "react";
import "./Hero.css";
import { Navbar } from "../index.js";

import { g1, g2, g3, g4, g5, g6, g7, n1, n2, n3 } from "../../assets/index.js";

const hero_images = [g1, g2, g5, g4, g3, g6, g7, n1, n2, n3];

const Hero = () => {
  return (
    <div className="hero-container">
      <Navbar />
      <div className="hero">
        <div className="image-wrapper">
          {hero_images.map((image, index) => (
            <img key={index} src={image} alt="Hero-image" />
          ))}
        </div>
        <div className="title">
          <h1>Tala Prattoy</h1>
          <div className="btns">
            <button className="art">Art Walkthrough</button>
            <button className="entry">Priviledged Entry</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
