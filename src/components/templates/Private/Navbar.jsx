import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar-brand">
      <Link className="navbar-title" to="/books">
        Borrow.me
      </Link>
    </nav>
  );
};

export default Navbar;
