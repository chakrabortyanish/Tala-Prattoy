import React from 'react'
import './News.css';

import { g6, n1, n2, n3, n4, n5 } from '../../assets/index.js';

const News = () => {
  return (
    <div className="news">
      <h1><span>Tala In</span> News</h1>
      <div className="news-container">
        <div className="news-item">
          <img src={g6} alt="News-image" />
          <div className="about">
            <h3>Encouraging Craftsmanship</h3>
            <p>Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.</p>
          </div>
        </div>
        <div className="news-item">
          <img src={n1} alt="News-image" />
          <div className="about">
            <h3>Encouraging Craftsmanship</h3>
            <p>Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.</p>
          </div>
        </div>
        <div className="news-item">
          <img src={n5} alt="News-image" />
          <div className="about">
            <h3>Encouraging Craftsmanship</h3>
            <p>Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.</p>
          </div>
        </div>
        <div className="news-item">
          <img src={n3} alt="News-image" />
          <div className="about">
            <h3>Encouraging Craftsmanship</h3>
            <p>Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.</p>
          </div>
        </div>
        <div className="news-item">
          <img src={n2} alt="News-image" />
          <div className="about">
            <h3>Encouraging Craftsmanship</h3>
            <p>Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.</p>
          </div>
        </div>
        <div className="news-item">
          <img src={n4} alt="News-image" />
          <div className="about">
            <h3>Encouraging Craftsmanship</h3>
            <p>Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
