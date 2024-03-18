import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


export default class App extends Component {
  name = 'ashu';
  render() {
    
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="" element={<News key="home" pageSize={5} country="us" category="technology" />} />
            <Route exact path="/health" element={<News key="health" pageSize={5} country="us" category="health" />} />
            <Route exact path="/business" element={<News key="business" pageSize={5} country="us" category="business" />} />
            <Route exact path="/science" element={<News key="science" pageSize={5} country="us" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={5} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={5} country="us" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
