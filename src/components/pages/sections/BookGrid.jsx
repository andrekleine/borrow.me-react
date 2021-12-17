import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BookGrid = ({ apiCall }) => {
  const [foundBookObjs, setFoundBookObjs] = useState([]);

  useEffect(async () => {
    try {
      const response = await apiCall;
      setFoundBookObjs(response);
    } catch (error) {
      throw new Error({ message: error });
    }
  }, []);

  return foundBookObjs ? (
    <div className="section-book-grid container-fluid" key="1">
      {foundBookObjs.map((bookObj) => {
        const { imgLink, googleID, title } = bookObj;

        return (
          imgLink && (
            <Link to={`/search/${googleID}`} key={googleID}>
              <img
                src={imgLink}
                alt={title}
                key={googleID}
                className="search-book-cover"
              />
            </Link>
          )
        );
      })}
    </div>
  ) : (
    <div>
      <p className="no-books">No books were found...</p>
    </div>
  );
};

export default BookGrid;
