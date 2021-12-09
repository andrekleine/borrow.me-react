import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getOneGoogleBook } from '../../../services/googleBooks';

import './SearchDetail.css';

import PrivateTemplate from '../../templates/Private/PrivateTemplate';

const SearchDetail = () => {
  const [bookObj, setBookObj] = useState({});
  const { bookId } = useParams();

  useEffect(() => {
    getOneGoogleBook(bookId)
      .then((response) => {
        setBookObj(response);
      })
      .catch((err) => {
        throw new Error({ message: err });
      });
  }, []);

  console.log(bookObj);

  return (
    <PrivateTemplate>
      {bookObj.lenght ? (
        <img
          src={bookObj.volumeInfo.imageLinks.thumbnail}
          alt={bookObj.volumeInfo.title}
          key={bookObj.id}
          className="search-book-cover"
        />
      ) : <p />}
    </PrivateTemplate>
  );
};

export default SearchDetail;
