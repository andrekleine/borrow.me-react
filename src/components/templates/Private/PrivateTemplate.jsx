import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Footer from './Footer';

import './PrivateTemplate.css';

const PrivateTemplate = ({ children }) => (
  <div className="private-template-container">
    <Navbar />
    <Footer />
    <div className="private-template-content">{children}</div>
  </div>
);

PrivateTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateTemplate;
