import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
// import { Button } from './Button';


import BackgroundVideo from "./BackgroundVideo"



class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-top">
          <BackgroundVideo/>
        </div>
        <div className="header-content">
          
        </div>
      </div>
    );
  }
}

export default Header;


