import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">
          <img src={logo} alt="Tech Vayuna Logo" />
        </Link>

        {/* Toggle button – minimal */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <ul className={`navbar-menu ${menuOpen ? "show" : ""}`}>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT US</Link></li>
          <li><Link to="/events" onClick={() => setMenuOpen(false)}>EVENTS</Link></li>
          <li><Link to="/team" onClick={() => setMenuOpen(false)}>OUR TEAM</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link></li>
        </ul>
    </div>
    </nav>
  </>
  );
};

export default Navbar;
