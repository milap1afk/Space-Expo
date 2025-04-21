import { useState, useEffect } from 'react'
import './App.css'
import SpaceTrivia from './components/SpaceTrivia'
import SpaceNews from './components/SpaceNews'
import MarsRoverPhotos from './components/MarsRoverPhotos'
import NASALibrary from './components/NASALibrary'

function App() {
  return (
    <div className="space-app">
      {/* Background Video */}
      <div className="video-container">
        <video autoPlay loop muted>
          <source src="https://videos.pexels.com/video-files/15694882/15694882-uhd_2560_1440_48fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <header>
        <h1>Space Exploration Dashboard</h1>
      </header>

      <main>
        <SpaceTrivia />
        <SpaceNews />
        <MarsRoverPhotos />
        <NASALibrary />
      </main>
    </div>
  )
}

export default App
