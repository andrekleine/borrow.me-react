import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-title" to="www.google.com">
        Borrow.me
      </Link>
    </nav>
  );
};

export default Navbar;
