import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'dark') {
      setMode('light')
      document.body.style.background = "white"

    } else {
      setMode('dark')
      document.body.style.background = "black"
    }
  }

  return (
    <>
      <Navbar title="My second app " about="about us" mode={mode} toggleMode = {toggleMode} />
      <about />
      <div className="container mb-3">
        <About/>
        <TextForm heading="Enter the text to analyse" />
      </div>
    </>
  );
}

export default App;
