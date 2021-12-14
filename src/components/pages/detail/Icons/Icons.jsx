import React from 'react';

import EyeComponent from './IconComponents/EyeComponent';
import BookComponent from './IconComponents/BookComponent';
import StarComponent from './IconComponents/StarComponent';

const Icons = ({ bookObj, setHasReview }) => {
  return (
    <div className="icons">
      <EyeComponent bookObj={bookObj} />
      <StarComponent setHasReview={setHasReview} />
      <BookComponent />
    </div>
  );
};

export default Icons;
