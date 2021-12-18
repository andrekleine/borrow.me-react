import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import EyeComponent from './Eye/EyeComponent';
import BookComponent from './Book/BookComponent';
import StarComponent from './Star/StarComponent';

import { getOneBook } from '../../../../services/api';

const Icons = ({ googleBook, setShowReview }) => {
  const { googleId } = useParams();
  const token = localStorage.getItem('token');

  const [myBook, setMyBook] = useState({});

  useEffect(async () => {
    try {
      const apiMyBookCall = await getOneBook(googleId, token);
      setMyBook({ ...apiMyBookCall[0] });
    } catch (error) {
      throw new Error({ message: error });
    }
  }, []);

  return (
    <div className="icons">
      <EyeComponent
        googleBook={googleBook}
        myBook={myBook}
        setMyBook={setMyBook}
      />
      <StarComponent setShowReview={setShowReview} />
      <BookComponent myBook={myBook} setMyBook={setMyBook} />
    </div>
  );
};

export default Icons;
