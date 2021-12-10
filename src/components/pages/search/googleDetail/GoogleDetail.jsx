import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getOneGoogleBook } from '../../../../services/googleBooks';

import PrivateTemplate from '../../../templates/Private/PrivateTemplate';

const GoogleDetail = () => {
  const [bookObj, setBookObj] = useState({});
  const { bookId } = useParams();

  useEffect(async () => {
    try {
      const response = await getOneGoogleBook(bookId);
      const { volumeInfo, id } = response;
      setBookObj({ ...volumeInfo, id });
    } catch (error) {
      throw new Error({ message: error });
    }
  }, []);

  return bookObj.id ? (
    <PrivateTemplate>
      <img
        src={bookObj.imageLinks.thumbnail}
        alt={bookObj.title}
        key={bookObj.id}
        className="search-book-cover"
      />
      <h1>{bookObj.title}</h1>
    </PrivateTemplate>
  ) : (
    <p />
  );
};

export default GoogleDetail;
