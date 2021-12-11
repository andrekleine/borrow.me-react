import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ReactComponent as BookFill } from '../../../misc/images/book-fill.svg';
import { ReactComponent as Book } from '../../../misc/images/book.svg';

import {
  getOneBook,
  deleteOneBook,
  addOneBook,
} from '../../../../services/api';

const BookComponent = ({ bookObj }) => {
  const token = localStorage.getItem('token');
  const { googleId } = useParams();

  const [lendable, setlendable] = useState({});
  const [savedBook, setSavedBook] = useState({});

  useEffect(async () => {
    try {
      const response = await getOneBook(googleId, token);
      if (response !== null) {
        setSavedBook({ ...response });
        if (savedBook.lendable) {
          setlendable(true);
        } else {
          setlendable(false);
        }
      }
    } catch (error) {
      throw new Error({ message: error });
    }
  }, []);

  const { title, authors, description, imageLinks, id } = bookObj;

  const reqBody = {
    title,
    authors,
    description,
    imgLink: imageLinks.thumbnail,
    googleID: id,
  };

  const bookOnClick = async () => {};

  return lendable ? (
    <BookFill onClick={bookOnClick} />
  ) : (
    <Book onClick={bookOnClick} />
  );
};

export default BookComponent;
