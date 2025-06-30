import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark px-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold text-white" to="/">Driftmark</NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link nav-hover active" : "nav-link nav-hover"}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link nav-hover active" : "nav-link nav-hover"}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link nav-hover active" : "nav-link nav-hover"}>Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link nav-hover active" : "nav-link nav-hover"}>Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/client-enquiry" className={({ isActive }) => isActive ? "nav-link nav-hover active" : "nav-link nav-hover"}>Enquiry</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
