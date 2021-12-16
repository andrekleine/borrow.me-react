import React from 'react';
import { Link } from 'react-router-dom';

const BookGrid = ({ foundBookObjs }) => {
  return foundBookObjs ? (
    <div className="search-book-grid" key="1">
      {foundBookObjs.map((bookObj) => {
        const imgLinks = bookObj.volumeInfo.imageLinks;
        const bookTitle = bookObj.volumeInfo.title;
        const bookId = bookObj.id;

        return (
          imgLinks && imgLinks.thumbnail && (
            <Link to={`/search/${bookId}`} key={bookId}>
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
  ) : (
    <div>
      <p className="no-books">
        No books were found using this combination of words.
      </p>
      <p className="no-books">Please try again!</p>
    </div>
  );
};

export default BookGrid;
