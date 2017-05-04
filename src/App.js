import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './materialize.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        {/*<div className="nav-wrapper">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Medium</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        
        <nav>
        <div class="nav-wrapper">
          <ul>
            <li className="medium"><strong>Medium</strong></li>
          </ul>

          <ul id="" class="right hide-on-med-and-down">
            
            <li><a href="#">Write a story</a></li>
            <li><a className="link" href="#">Sign in/ Sign up</a></li>
            <li><a href="#">Search</a></li>
          </ul>
        </div>
        </nav>

      </div>
    );
  }
}

export default App;
