import React from "react"
import "./Navbar.css"
import Logo from "../public/images/steam.png"

const Navbar = ({ sticky }) => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
      <h1> GameTrax</h1>
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item">Username</li>
      <li className="navbar--link-item">Discover</li>
      <li className="navbar--link-item">Friends</li>
    </ul>
  </nav>
)
export default Navbar