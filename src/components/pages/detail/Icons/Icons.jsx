import React from 'react';

import EyeComponent from './EyeComponent';

import { ReactComponent as StarFill } from '../../../misc/images/star-fill.svg';

import { ReactComponent as BookFill } from '../../../misc/images/book-fill.svg';

const Icons = ({ bookObj }) => {
  return (
    <div className="icons">
      <EyeComponent bookObj={bookObj} />
      <StarFill />
      <BookFill />
    </div>
  );
};

export default Icons;
