import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './materialize.css';
// import './materialize.js';

const Navlinks = () => {
  return (
    <div class="col s12 m9">
    <div class="navbar-fixed z-depth-1">
    <nav>
    
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="#"><strong>Home</strong></a></li>
        <li><a href="#">Popular on medium</a></li>
        <li><a href="#">Staff picks</a></li>
        <li><a href="#">World</a></li>
        <li><a href="#">Future</a></li>
        <li><a href="#">Life</a></li>
        <li><a href="#">Art</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Digital Design</a></li>
        <li><a href="#">Bookmanpmrks</a></li>
      </ul>
    </nav>
    </div>
    </div>
  );
};

const Body = () =>{
  return(
    // BodyTag
    
      <div>
        <a href="#!" className="tag"><strong>Popular on Medium</strong> ></a>
      </div>
    // </nav>
    // End BodyTag

    
  );
};

const cardcontent =() =>{
    return(
      <div class="container">
  <div class="row">
  <div class="col s12 m12">
  <div class="card horizontal">
      <div class="card-image">
        <img src="./img/img1.jpg" />
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <h4>Virtual Reality - F8 2017 conference</h4>
        </div>
        <div class="card-action">
          <a href="#">“You are the average of the five people you spend the most time around.” — Jim Rohn</a>
        </div>
         <div class="chip">
           <img src="./img/img1.jpg" alt="Contact Person" />
             Jane Doe
            </div>
      </div>
    </div>
  </div>
  </div>
  </div>
    );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
         <nav>         
          <div className="nav-wrapper" >
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li className="medium">Medium</li>
              <li><a href="#">Write a story</a></li>
              <li><a className="link" href="#">Sign in/ Sign up</a></li>
              <li><a href="#"><i class="material-icons">search</i></a></li>
            </ul>
          </div>
          </nav>
        </div>

        {/* Start body */}
         <Navlinks />
         <Body />
         <cardcontent />
      </div>
    );
  }
}

export default App;
