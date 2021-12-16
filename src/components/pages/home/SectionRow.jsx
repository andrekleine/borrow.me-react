import React from 'react';
import BookSwiper from './Swiper';

const SectionRow = ({ title, bookArray }) => {
  return (
    <div className="section-row">
      <h1 className="section-title">{title}</h1>
      <div className="container book-swiper-row">
        <BookSwiper bookArray={bookArray} />
      </div>
    </div>
  );
};

export default SectionRow;
