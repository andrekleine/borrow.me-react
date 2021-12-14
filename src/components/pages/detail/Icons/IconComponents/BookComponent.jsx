import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ReactComponent as BookFill } from '../../../../misc/images/book-fill.svg';
import { ReactComponent as Book } from '../../../../misc/images/book.svg';

import { getOneBook, changeOneBook } from '../../../../../services/api';

const BookComponent = () => {
  const token = localStorage.getItem('token');
  const { googleId } = useParams();

  const [lendable, setlendable] = useState({});
  const [savedBook, setSavedBook] = useState({});

  useEffect(async () => {
    try {
      const response = await getOneBook(googleId, token);
      if (response !== null) {
        setSavedBook({ ...response[0] });
      }
      if (savedBook.lendable === true) {
        setlendable(true);
      } else {
        setlendable(false);
      }
    } catch (error) {
      throw new Error({ message: error });
    }
  }, [lendable]);

  const bookOnClick = async () => {
    if (savedBook._id) {
      if (lendable) {
        const reqBody = { lendable: false };
        await changeOneBook(reqBody, token, savedBook._id);
        setlendable(false);
      } else {
        const reqBody = { lendable: true };
        await changeOneBook(reqBody, token, savedBook._id);
        setlendable(true);
      }
    }
  };

  return lendable ? (
    <BookFill onClick={bookOnClick} />
  ) : (
    <Book onClick={bookOnClick} />
  );
};

export default BookComponent;
