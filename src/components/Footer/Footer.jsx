import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/Logo.png";

export default function Footer() {
  const myEmail = "techvayuna2k19@gmail.com";

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=Contact from Website`;

  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section footer-logo">
          <img
            src={logo}
            alt="Tech Vayuna Logo"
            className="logo-footer"
          />
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Menu</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/team">Our Team</Link></li>
          </ul>
        </div>


        <div className="footer-section">
          <h3 className="footer-heading">Connect</h3>
          <ul className="footer-links">
            <li>
              <a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/techvayuna/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tech_vayuna/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://x.com/tech_vayuna"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Address</h3>
          <p className="footer-address">
            SRM Institute of Science And Technology
            <br />
            Bharath Salai Ramapuram, Chennai,
            <br />
            Tamil Nadu 600089
          </p>
        </div>

      </div>
    </footer>
  );
}
