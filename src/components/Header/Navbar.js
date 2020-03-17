import React from "react"
import "./Navbar.css"
import avatar from '../../components/public/images/chief.jpg'


const Navbar = ({ sticky }) => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      {sticky ? <img src={avatar} alt="avatar" className="navbar--logo" /> : null}
      <h1> GameTrax</h1>
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item"><a href='#profile'>Username</a></li>
      <li className="navbar--link-item"><a href='#discover'>Discover</a></li>
      <li className="navbar--link-item"><a href='#friends'>Friends</a></li>
    </ul>
  </nav>
)
export default Navbar