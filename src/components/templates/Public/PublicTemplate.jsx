import React from 'react';
import PropTypes from 'prop-types';

import './PublicTemplate.css';

const PublicTemplate = ({ children }) => (
  <div className="public-template-container">
    <h1 className="public-template-title">Borrow.me</h1>
    <h3 className="public-template-subtitle">Connect with people and books in a great community</h3>

    <div className="public-template-content">{children}</div>
  </div>
);

PublicTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicTemplate;
