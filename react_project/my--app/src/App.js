import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  } 

  const toggleMode = () => {
    if(mode === 'dark') {
      setMode('light')
      document.body.style.background = "white"
      showAlert("Light mode has been enabled.", "success")
      document.title = 'My-app (Light Mode)'
      setInterval(() => {
        document.title = 'My-app in light mode';
      }, 1500);

      setInterval(() => {
        document.title = 'This is amazing';
      }, 3000);

    } else {
      setMode('dark')
      document.body.style.background = "black"
      showAlert("Dark mode has been enabled.", "success")
      document.title = 'My-app (Dark Mode)'
    }
  }

  return (
    
      <BrowserRouter>
        <Navbar title="My second app " about="about us" mode={mode} toggleMode = {toggleMode} />
        <Alert alert = {alert}/>
        <div className="container mb-3">
          <Routes>
            <Route path="/tfm" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse"/>} />
            <Route path="/abt" element={<About/>} />
          </Routes>
        </div>
      </BrowserRouter>
  
  );
}

export default App;
