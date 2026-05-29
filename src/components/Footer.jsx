import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container footer-container">
        <div className="footer-logo">
          <div className="logo-badge" style={{ width: '32px', height: '32px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style={{ width: '18px', height: '18px' }}>
              <circle cx="50" cy="50" r="40" fill="none" stroke="var(--bg-dark-green)" strokeWidth="6" />
              <path d="M40,30 L40,70 L50,70 L50,30 Z" fill="var(--bg-dark-green)" />
              <path d="M60,30 L60,70" stroke="var(--bg-dark-green)" strokeWidth="8" />
            </svg>
          </div>
          <span className="footer-logo-title">Asian Food Bowl Restaurant</span>
        </div>

        <p>© {new Date().getFullYear()} Asian Food Bowl Restaurant, Vijayawada. All Rights Reserved.</p>

        <div className="footer-links">
          <Link to="/" className="footer-link-btn">Home</Link>
          <span style={{ color: '#888' }}>•</span>
          <Link to="/menu" className="footer-link-btn">Menu</Link>
          <span style={{ color: '#888' }}>•</span>
          <Link to="/contact" className="footer-link-btn">Location</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
