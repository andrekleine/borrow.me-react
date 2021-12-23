import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  newFromFriends,
  friendsWillLend,
  readRecently,
} from '../../../services/api';

const BookGrid = ({ sectionName }) => {
  const token = localStorage.getItem('token');
  const [foundBookObjs, setFoundBookObjs] = useState([]);

  useEffect(async () => {
    try {
      if (sectionName === 'New from friends') {
        setFoundBookObjs(await newFromFriends(token));
      } else if (sectionName === 'Friends will lend') {
        setFoundBookObjs(await friendsWillLend(token));
      } else {
        setFoundBookObjs(await readRecently(token));
      }
    } catch (error) {
      throw new Error({ message: error });
    }
  }, []);

  return foundBookObjs ? (
    <div className="row" key="1">
      {foundBookObjs.map((bookObj) => {
        const { imgLink, googleID, title } = bookObj;

        return (
          imgLink && (
            <div className="col-4" key={googleID}>
              <div className="book-cover-container">
                <Link to={`/search/${googleID}`} key={googleID}>
                  <img
                    src={imgLink}
                    alt={title}
                    key={googleID}
                    className="search-book-cover"
                  />
                </Link>
              </div>
            </div>
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
