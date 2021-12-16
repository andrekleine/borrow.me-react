import React, { useEffect } from 'react';

import { ReactComponent as BookFill } from '../../../../misc/images/book-fill.svg';
import { ReactComponent as Book } from '../../../../misc/images/book.svg';

import { changeOneBook } from '../../../../../services/api';

const BookComponent = ({ myBook, setMyBook }) => {
  const token = localStorage.getItem('token');

  useEffect(() => {}, [myBook.lendable]);

  const bookOnClick = async () => {
    if (myBook.lendable) {
      const reqBody = { lendable: false };
      await changeOneBook(reqBody, token, myBook._id);
      setMyBook({ ...myBook, lendable: false });
    } else {
      const reqBody = { lendable: true };
      await changeOneBook(reqBody, token, myBook._id);
      setMyBook({ ...myBook, lendable: true });
    }
  };

  return myBook.lendable ? (
    <BookFill onClick={bookOnClick} />
  ) : (
    <Book onClick={bookOnClick} />
  );
};

export default BookComponent;
