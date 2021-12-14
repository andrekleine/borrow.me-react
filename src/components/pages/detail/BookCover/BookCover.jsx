import React from 'react';

const BookCover = ({ bookObj }) => {
  return (
    <img
      src={bookObj.imageLinks.thumbnail}
      alt={bookObj.title}
      key={bookObj.id}
      className="detail-book-cover"
    />
  );
};

export default BookCover;
