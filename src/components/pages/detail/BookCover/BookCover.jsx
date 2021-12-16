import React from 'react';

const BookCover = ({ googleBook }) => {
  return (
    <img
      src={googleBook.imageLinks.thumbnail}
      alt={googleBook.title}
      key={googleBook.id}
      className="detail-book-cover"
    />
  );
};

export default BookCover;
