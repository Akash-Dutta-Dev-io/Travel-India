import './App.css';
import { useState } from 'react';
import Background from "./Components/Background/Background"
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';

function App() {
  let heroData = [
    { text1: "Dive Into", text2: "What you love" },
    { text1: "Explore History", text2: "In Jaipur " },
    { text1: "Give in to", text2: "your passions" }
  ]

  const [heroCount, setHeroCount] = useState(0);

  const [playStatus, setPlayStatus] = useState(false);
  return (
    <>
      <NavBar />
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </>
  );
}

export default App;
