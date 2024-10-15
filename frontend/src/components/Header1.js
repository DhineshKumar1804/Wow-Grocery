import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Updated to Header.css for consistency

const Header = ({ isAdmin }) => {
  return (
    <nav className='butt' >
      <button className='but'>
        <Link to="/home">Home</Link>
      </button>
      
      
      <button className='but'>
        <Link to="/about">About Us</Link>
      </button>
      <button className='but'>
        <Link to="/login">Login</Link>
      </button>
      
      
      
      
    </nav>
  );
};

export default Header;
