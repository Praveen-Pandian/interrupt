import "../Styles/Navbar.css";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom"; // Use Link instead of <a> for navigation
import acelogo from "../Components/acelogo.png";
import svcelogo from "../Components/svce-logo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const params = useLocation();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo-left">
          <img className="svce" src={svcelogo} alt="SVCE Logo" />
        </div>

        <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li>
            <Link
              to="/home"
              className={params.pathname === "/home" || params.pathname === "/"  ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className={params.pathname.includes("/events") === true ? "active" : ""}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/workshop"
              className={params.pathname.includes("/workshop") === true ? "active" : ""}
            >
              Workshop
            </Link>
          </li>
          <li>
            <Link
              to="/our-team"
              className={params.pathname === "/our-team" ? "active" : ""}
              style={{whiteSpace:"nowrap"}}
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              to="/sponsors"
              className={params.pathname === "/sponsors" ? "active" : ""}
            >
              Sponsors
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={params.pathname === "/gallery" ? "active" : ""}
            >
              Gallery
            </Link>
          </li>
        </ul>
        <div className="logo-right">
          <img className="ace" src={acelogo} alt="ACE Logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {isMobileMenuOpen ? (
            <div className="close-icon">
              {/* Close Icon */}
              <div className="line rotate1"></div>
              <div className="line rotate2"></div>
            </div>
          ) : (
            <div className="hamburger-icon">
              {/* Hamburger Icon */}
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
