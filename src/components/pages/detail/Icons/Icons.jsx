import React from 'react';

import EyeComponent from './Eye/EyeComponent';
import BookComponent from './Book/BookComponent';
import StarComponent from './Star/StarComponent';

const Icons = ({ googleBook }) => {
  return (
    <div className="icons">
      <EyeComponent googleBook={googleBook} />
      <StarComponent />
      <BookComponent />
    </div>
  );
};

export default Icons;
