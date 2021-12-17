import React from 'react';
import { Link } from 'react-router-dom';

import BookSwiper from './Swiper';

const SectionRow = ({ title, bookArray }) => {
  return (
    <div className="section-row">
      <Link to={`/section/${title}`} className="section-name-link">
        <h1 className="section-title">{title}</h1>
      </Link>
      <div className="container book-swiper-row">
        <BookSwiper bookArray={bookArray} />
      </div>
    </div>
  );
};

export default SectionRow;
