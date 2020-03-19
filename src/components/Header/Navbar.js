import React from "react"
import "./Navbar.css"
import logo from '../public/images/gametrax-g.png'
import name from '../public/images/gametrax-letters.png'


const Navbar = ({ sticky, nickname}) => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      {sticky ? <img src={logo} alt="avatar" className="navbar--logo" /> : null}
      {sticky? null : <img src={name} alt="name" id="name"/>}
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item"><a href='/signup'>Discover</a></li>
      <li className="navbar--link-item"><a href='/'>Friends</a></li>
      <li className="navbar--link-item"><a href='/login'>{nickname}</a></li>
    </ul>
  </nav>
)
export default Navbar