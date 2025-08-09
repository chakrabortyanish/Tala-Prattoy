import React from 'react'
import './Award.css'

import { massArt } from '../../assets/index.js'

const Award = () => {
  return (
    <div className='award'>
       <div className="text">
           <h1>Award</h1>
           <p>Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.</p>
       </div>
        <div className="images">
          <img src={massArt} alt="Award" />
          <img src={massArt} alt="Award" />
          <img src={massArt} alt="Award" />
          <img src={massArt} alt="Award" />
          <img src={massArt} alt="Award" />
        </div>
    </div>
  )
}

export default Award
