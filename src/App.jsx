import React, { useState } from "react";
import "./App.css";
import {
  Hero,
  About,
  Discover,
  StatsSection,
  Feature,
  PlayVideo,
  Award,
  Advertise,
  Gallery,
  News,
  Footer,
} from "./components/index.js";

function App() {
  return (
    <div className="app">
      <div className="app-components">
        <Hero />
        <About />
        <Discover />
        <StatsSection />
        <Feature />
        <PlayVideo />
        <Award />
      </div>
      <Advertise />
      <div className="app-components">
        <Gallery />
        <News />
      </div>
      <Footer />
    </div>
  );
}

export default App;
