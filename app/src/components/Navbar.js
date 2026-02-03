import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <div className="logo">
          <img src="/logo-cutmain.png" alt="Logo" />
          <span>RATHINAVEL LOGISTICS</span>
        </div>
        
        <ul className="nav-links">
          <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
          
          <li
            className={`dropdown ${servicesOpen ? "active" : ""}`}
            ref={dropdownRef}
          >
            <button
              className="dropdown-title"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <span className="arrow">▾</span>
            </button>
            <ul className="dropdown-menu">
              <li><Link to="/services/customs-clearance" onClick={() => window.scrollTo(0, 0)}>Customs Clearance</Link></li>
              <li><Link to="/services/road-transport" onClick={() => window.scrollTo(0, 0)}>Road Transport</Link></li>
              <li><Link to="/services/warehousing" onClick={() => window.scrollTo(0, 0)}>Warehousing & Distribution</Link></li>
              <li><Link to="/services/ocean-freight" onClick={() => window.scrollTo(0, 0)}>Ocean Freight</Link></li>
              <li><Link to="/services/air-freight" onClick={() => window.scrollTo(0, 0)}>Air Freight</Link></li>
            </ul>
          </li>
          <li><Link to="/industries" onClick={() => window.scrollTo(0, 0)}>Industries</Link></li>
          <li><Link to="/about" onClick={() => window.scrollTo(0, 0)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;