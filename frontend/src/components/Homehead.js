import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAdmin }) => {
  return (
    <nav className='butt' >
      <button className='but'>
        <Link to="/products">Product List</Link>
      </button>
      
      
    </nav>
  );
};

export default Header;
