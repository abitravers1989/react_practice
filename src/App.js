import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import { Home } from "./components/Home";

class App extends Component {
  render() {
    var user = {
      name: "Snakes",
      hobbies: ["Sports"]
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Home name={"Max"} age={27} user={user.name}/>
      </div>
    );
  }
}

export default App;
