import React from 'react';

const BookGrid = ({ foundBookObjs }) => {
  return (
    <div className="book-container-height">
      {foundBookObjs.map((bookObj) => {
        const imgLinks = bookObj.volumeInfo.imageLinks;
        const bookTitle = bookObj.volumeInfo.title;
        const bookId = bookObj.id;
        return (
          imgLinks && imgLinks.thumbnail && (
            <img
              src={imgLinks.thumbnail}
              alt={bookTitle}
              key={bookId}
              className="book-cover"
            />
          )
        );
      })}
    </div>
  );
};

export default BookGrid;
