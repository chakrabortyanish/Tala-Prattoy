import React from 'react'
import './StatsSection.css'

const StatsSection = () => {
  return (
    <div className="stats-section">
      <div className="context">
        <h1><span>Lorem</span> Ipsum</h1>
        <p>Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival.</p>
      </div>
      <div className="stats">
        <div className="text">
            <div className="stat-item"><span>500k+</span> Existing Partnerships</div>
            <div className="stat-item"><span>100k+</span> Existing Partnerships</div>
        </div>
        <div className="text">
            <div className="stat-item"><span>5M</span> Existing Partnerships</div>
            <div className="stat-item"><span>5M</span> Award Winning</div>
        </div>
      </div>
    </div>
  )
}

export default StatsSection
