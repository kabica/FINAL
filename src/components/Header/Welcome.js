import React from "react"
import "./Welcome.css"
import Logo from "../public/images/steam.png"

const Welcome = ({ stickyRef }) => (
  <main>
    <section className="welcome">
      <div ref={stickyRef}>
        <img src={Logo} alt="logo" className="welcome--logo" />
        <p>Even if you scroll, i will stick with you</p>
        <button className="welcome__cta-primary">Contact us</button>
      </div>
    </section>
  </main>
)

export default Welcome