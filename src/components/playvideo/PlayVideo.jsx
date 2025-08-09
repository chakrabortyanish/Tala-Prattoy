import React from 'react'
import './PlayVideo.css'

import { play_icon, play_video } from '../../assets'

const PlayVideo = () => {
  return (
    <div className='play-video'>
        <img src={play_video} alt="video" className='video'/>
        <img src={play_icon} alt="play-icon" className='play-icon'/>
    </div>
  )
}

export default PlayVideo
