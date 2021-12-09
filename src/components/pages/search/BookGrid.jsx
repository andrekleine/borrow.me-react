import React from 'react';
import { Link } from 'react-router-dom';

const BookGrid = ({ foundBookObjs }) => {
  return (
    <div className="search-book-grid">
      {foundBookObjs.map((bookObj) => {
        const imgLinks = bookObj.volumeInfo.imageLinks;
        const bookTitle = bookObj.volumeInfo.title;
        const bookId = bookObj.id;

        return (
          imgLinks && imgLinks.thumbnail && (
            <Link to={`/search/${bookId}`}>
              <img
                src={imgLinks.thumbnail}
                alt={bookTitle}
                key={bookId}
                className="search-book-cover"
              />
            </Link>
          )
        );
      })}
    </div>
  );
};

export default BookGrid;
