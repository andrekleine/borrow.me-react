import React from 'react';

import EyeComponent from './EyeComponent';
import BookComponent from './BookComponent';

import { ReactComponent as StarFill } from '../../../misc/images/star-fill.svg';

const Icons = ({ bookObj }) => {
  return (
    <div className="icons">
      <EyeComponent bookObj={bookObj} />
      <StarFill />
      <BookComponent />
    </div>
  );
};

export default Icons;
