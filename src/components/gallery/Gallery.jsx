import React from "react";
import "./Gallery.css";

import { g1, g2, g3, g4, g5, g6, g7 } from "../../assets/index.js";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="context">
        <h1>Gallery</h1>
        <p>
          Learning provides the environment and inspiration to create and
          exhibit that brings people together to build connections to community.
        </p>
      </div>
      <div className="images">
        <div className="grid1">
          <img src={g1} alt="Gallery-image" className="item1" />
          <img src={g3} alt="Gallery-image" className="item2" />
        </div>
        <div className="grid2">
          <img src={g7} alt="Gallery-image" className="item3" />
          <img src={g2} alt="Gallery-image" className="item4" />
        </div>
        <div className="grid3">
          <img src={g3} alt="Gallery-image" className="item5" />
          <img src={g4} alt="Gallery-image" className="item6" />
        </div>
        <div className="grid4">
          <img src={g6} alt="Gallery-image" className="item7" />
          <img src={g5} alt="Gallery-image" className="item8" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
