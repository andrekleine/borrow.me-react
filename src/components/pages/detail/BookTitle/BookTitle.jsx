import React from 'react';

const BookTitle = ({ googleBook }) => {
  return <h1 className="detail-title">{googleBook.title}</h1>;
};

export default BookTitle;
