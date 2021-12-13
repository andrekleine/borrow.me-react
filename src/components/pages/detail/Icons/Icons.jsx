import React from 'react';

import EyeComponent from './EyeComponent';
import BookComponent from './BookComponent';
import StarComponent from './StarComponent';

const Icons = ({ bookObj }) => {
  return (
    <div className="icons">
      <EyeComponent bookObj={bookObj} />
      <StarComponent />
      <BookComponent />
    </div>
  );
};

export default Icons;
