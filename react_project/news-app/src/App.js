import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';

export default class App extends Component {
  name = 'ashu';
  render() {
    
    return (
      <div>
        <Navbar />
      </div>
    )
  }
}
