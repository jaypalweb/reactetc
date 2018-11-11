import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import A from './A/A';
import B from './B/B'
class App extends Component {
  render() {
    return (
      <div className="App">
        <A />
        <B />
      </div>
    );
  }
}

export default App;
