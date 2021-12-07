import React from 'react';
import BookSwiper from './Swiper';

const SectionRow = ({ title, bookArray }) => {
  return (
    <div className="section-row">
      <h1 className="section-title">{title}</h1>
      <div className="container">
        <BookSwiper bookArray={bookArray} />
      </div>
    </div>
  );
};

export default SectionRow;
