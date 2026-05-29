import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle theme toggle
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <Link to="/" className="logo-wrapper">
          <div className="logo-badge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style={{ width: '28px', height: '28px' }}>
              <circle cx="50" cy="50" r="40" fill="none" stroke="var(--bg-dark-green)" strokeWidth="4" />
              <path d="M35,30 C30,45 30,55 35,70 L40,70 L40,55 L45,55 L45,70 L50,70 L50,30 Z" fill="var(--bg-dark-green)" />
              <path d="M60,30 L60,50 L65,50 L65,70 L70,70 L70,30 Z" fill="var(--bg-dark-green)" />
              <path d="M45,45 L55,45" stroke="var(--bg-dark-green)" strokeWidth="3" />
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-title">Asian Food Bowl</span>
            <span className="logo-sub">Vijayawada</span>
          </div>
        </Link>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => `nav-link-btn ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link-btn ${isActive ? 'active' : ''}`}>About</NavLink>
          <NavLink to="/menu" className={({ isActive }) => `nav-link-btn ${isActive ? 'active' : ''}`}>Menu Items</NavLink>
          <NavLink to="/specialities" className={({ isActive }) => `nav-link-btn ${isActive ? 'active' : ''}`}>Specialities</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link-btn ${isActive ? 'active' : ''}`}>Contact</NavLink>

          {/* Show call button only inside mobile menu dropdown on small screens */}
          {isMobileMenuOpen && (
            <a href="tel:09494233488" className="btn-call" style={{ display: 'flex', marginTop: '10px', justifyContent: 'center' }}>
              <span>📞</span> Call: 09494233488
            </a>
          )}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle-btn"
            onClick={() => setIsLightMode(!isLightMode)}
            aria-label="Toggle Theme"
          >
            {isLightMode ? '🌙' : '☀️'}
          </button>

          <a href="tel:09494233488" className="btn-call">
            <span>📞</span> Call: 09494233488
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
