// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="navbar-brand">📚 BookShelf</div>

      <ul className="navbar-links">
        <li><Link to="/books">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/brand">Brand</Link></li>
      </ul>

      <div className="navbar-search">
        <input type="text" placeholder="Search books..." />
        <button>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
