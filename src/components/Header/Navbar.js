import React from "react"
import "./Navbar.css"
import logo from '../public/images/gametrax-g.png'
import name from '../public/images/gametrax-letters.png'


const Navbar = ({ sticky, nickname}) => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      {sticky ? <a href='/'><img src={logo} alt="avatar" className="navbar--logo" /></a> : null}
      {sticky? null : <a href='/'><img src={name} alt="name" id="name"/></a>}
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item"><a href='/discover'>Discover</a></li>
      <li className="navbar--link-item"><a href='/friends'>Friends</a></li>
      <li className="navbar--link-item"><a href='/profile'>{nickname}</a></li>
    </ul>
  </nav>
)
export default Navbar