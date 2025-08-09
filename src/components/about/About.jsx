import React from 'react'
import './About.css'

import {a1, a2, a3} from '../../assets/index.js'

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <div className="content">
          <h1><span>About</span> Tala</h1>
          <p>Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific art genre where the public space is being transformed into an art venue. We are committed to make that art global.Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific art genre where the public space is being transformed into an art venue. We are committed to make that art global.</p>
        </div>
        <img src={a1} alt="About-image" />
        <img src={a2} alt="About-image" />
        <img src={a3} alt="About-image" />
      </div>
    </div>
  )
}

export default About
