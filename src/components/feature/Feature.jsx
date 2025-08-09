import React from 'react'
import './Feature.css'

import{f1, f2, f3, f4} from '../../assets/index.js'


const Feature = () => {
  return (
    <div className='feature-container'>
      <div className="title">
        <h1><span>Objective</span> & features</h1>
        <p>Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.</p>
      </div>
      <div className="feature">
        <div className="feature-item">
            <img src={f1} alt="" />
            <div className="txt">
                <h3>Durga Puja Art 2024</h3>
                <p>Tala Prattoy, endeavouring towards global art forever, projects this year’s Durga Puja Art as celebrating the journey of a Durga Puja Artist. It thus highlights Kahan – a narration by Susanta Paul, the Artist of high repute</p>
            </div>
        </div>
        <div className="feature-item">
            <img src={f2} alt="" />
            <div className="txt">
                <h3>Watch Art with Artist</h3>
                <p>2024 introduces a never-seen-before guided walkthrough in Tala Prattoy Durga Puja Art venue where visitors may, in groups, see the artworks through a smooth walk with a guide. Here the guide is the Artist himself. This programme is chargeable and the visitors have to buy tickets for booking the slots of different times</p>
            </div>
        </div>
        <div className="feature-item">
            <img src={f3} alt="" />
            <div className="txt">
                <h3>Encouraging Craftsmanship</h3>
                <p>Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.</p>
            </div>
        </div>
        <div className="feature-item">
            <img src={f4} alt="" />
            <div className="txt">
                <h3>Promotion of Installation Art</h3>
                <p>Installation Art is an artistic genre of multi-dimensional works which are generally site-specific. It’s aim – to see a generation of exquisite artists to emerge.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
