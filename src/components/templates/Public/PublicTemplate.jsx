import React from 'react';
import PropTypes from 'prop-types';

import './PublicTemplate.css';

const PublicTemplate = ({ children }) => (
  <div className="public-template-container">
    <div className="public-template-title">
      <h1>Borrow.me</h1>
      <h3>Connect with people and books in a great community</h3>
    </div>
    <div className="public-template-content">{children}</div>
  </div>
);

// PublicTemplate.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default PublicTemplate;
