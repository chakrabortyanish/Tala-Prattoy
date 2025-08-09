import React from "react";
import "./Footer.css";

import { image } from "../../assets/index.js";

import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-side">
        <div className="content">
          <div className="logo">
            <div>
              <img src={image} alt="Tala_Prattoy_image" />
              <h1>Tala Prattoy</h1>
            </div>
          </div>
          <div className="txt">
            Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </div>
          <div className="create-acc">
            <h3>Join Newsletters</h3>
            <div className="acc">
              <input type="text" placeholder="Insert your mail here" />
              <button>→</button>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="context">
          <ul>
            <li className="heading">Product</li>
            <li>Movies</li>
            <li>TV Show</li>
            <li>Videos</li>
          </ul>
          <ul>
            <li className="heading">Media Group</li>
            <li>Nice Studio</li>
            <li>Nice News</li>
            <li>Nice TV</li>
          </ul>
          <ul>
            <li className="heading">Sitemap</li>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
          <ul className="link">
            <li className="heading">Contact</li>
            <li>
              <FiPhone className="icon" />
              +271 386-647-3637
            </li>
            <li>
              <MdMailOutline className="icon" />
              ourstudio@hello.com
            </li>
            <li className="location">
              <IoLocationOutline className="icon" />
              <div>8819 Ohio St. South Gate, California 90280</div>
            </li>
          </ul>
        </div>
        <div className="copyright">
          Copyright © 2024 massArt, Designed & Developed Ethically by Ethical
          Den
        </div>
      </div>
    </div>
  );
};

export default Footer;
