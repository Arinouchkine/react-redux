import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logs from "./components/Logs";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <Logs lines={['line1','line2']}/>
      </div>
    );
  }
}
