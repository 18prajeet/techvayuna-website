
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">
          <img src={logo} alt="Tech Vayuna Logo" />
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/about">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/events">
              EVENTS
            </Link>
          </li>
          <li>
            <Link to="/team">
              OUR TEAM
            </Link>
          </li>
          <li>
            <Link to="/contact">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
