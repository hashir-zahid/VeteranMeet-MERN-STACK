import React, { useState } from 'react';
import './Navbar.css';

// You can pass 'guest', 'veteran', or 'organization' as the role prop
const Navbar = ({ role = 'guest', onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* 1. Logo Section */}
        <a href="/" className="navbar-logo">
          Veteran<span className="logo-highlight">Meet</span>
        </a>

        {/* 2. Mobile Menu Icon (Hamburger) */}
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={isMobileMenuOpen ? 'bar open' : 'bar'}></span>
          <span className={isMobileMenuOpen ? 'bar open' : 'bar'}></span>
          <span className={isMobileMenuOpen ? 'bar open' : 'bar'}></span>
        </div>

        {/* 3. Navigation Links */}
        <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          
          {/* LINKS FOR GUESTS */}
          {role === 'guest' && (
            <>
              <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="/about" className="nav-link">About Us</a></li>
              <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
              <li className="nav-item mobile-only"><a href="/login" className="nav-link">Sign In</a></li>
            </>
          )}

          {/* LINKS FOR VETERANS */}
          {role === 'veteran' && (
            <>
              <li className="nav-item"><a href="/feed" className="nav-link">Social Feed</a></li>
              <li className="nav-item"><a href="/events" className="nav-link">Find Events</a></li>
              <li className="nav-item"><a href="/profile" className="nav-link">My Profile</a></li>
            </>
          )}

          {/* LINKS FOR ORGANIZATIONS */}
          {role === 'organization' && (
            <>
              <li className="nav-item"><a href="/dashboard" className="nav-link">Dashboard</a></li>
              <li className="nav-item"><a href="/create-event" className="nav-link">Create Event</a></li>
              <li className="nav-item"><a href="/settings" className="nav-link">Settings</a></li>
            </>
          )}

          {/* 4. Action Buttons (Desktop) */}
          <div className="nav-actions">
            {role === 'guest' ? (
              <>
                <a href="/login" className="btn-outline">Sign In</a>
                <a href="/register" className="btn-solid">Get Started</a>
              </>
            ) : (
              <button onClick={onLogout} className="btn-outline logout-btn">
                Logout
              </button>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
