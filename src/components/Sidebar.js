// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
      <button className="menu-btn" onClick={toggleSidebar}>
        <br></br>
        
        ☰
      </button>

      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <br></br>
        <br></br>
        <br></br>
        <Link className={location.pathname === '/books' ? 'active' : ''} to="/books">
          📖 Book List
        </Link>
        <Link className={location.pathname === '/books/new' ? 'active' : ''} to="/books/new">
          ➕ Add Book
        </Link>
        <Link to="/profile">👤 Profile</Link>
        <Link to="/settings">⚙️ Settings</Link>
        <Link to="/">🔒 Logout</Link>
      </div>
    </>
  );
};

export default Sidebar;
