import React from 'react'
import './Discover.css'

import { d, play_icon } from '../../assets/index.js'

const Discover = () => {
  return (
    <div className="discover-container">
       <div className="video">
         <img src={d} alt="" className='Discover-image'/>
         <img src={play_icon} alt="" className="video-logo" />
       </div>
        <div className="discover-content">
          <h1 className="discover-title"><span>Discover</span> Tala</h1>
          <p className="discover-description">
            Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific art genre where the public space is being transformed into an art venue. We are committed to make that art global.Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific art genre where the public space is being transformed into an art venue. We are committed to make that art global.
          </p>
        </div>
    </div>
  )
}

export default Discover
