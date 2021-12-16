import React from 'react';

const Authors = ({ googleBook }) => {
  return (
    <div>
      {googleBook.authors.map((author) => {
        return (
          <h3 className="detail-author" key={author}>
            {author}
          </h3>
        );
      })}
    </div>
  );
};

export default Authors;
