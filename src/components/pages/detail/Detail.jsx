import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import './Detail.css';

import PrivateTemplate from '../../templates/Private/PrivateTemplate';
import BookCover from './BookCover/BookCover';
import BookTitle from './BookTitle/BookTitle';
import Authors from './Authors/Authors';
import Icons from './Icons/Icons';
import FriendsWhoLend from './FriendsWhoLend/FriendsWhoLend';
import MyReview from './MyReview/MyReview';

import { getOneGoogleBook } from '../../../services/googleBooks';

const Detail = () => {
  const { googleId } = useParams();

  const [googleBook, setGoogleBook] = useState({});

  useEffect(async () => {
    try {
      const googleBooksCall = await getOneGoogleBook(googleId);
      const { volumeInfo, id } = googleBooksCall;
      setGoogleBook({ ...volumeInfo, id });
    } catch (error) {
      throw new Error({ message: error });
    }
  }, []);

  return googleBook.id ? (
    <PrivateTemplate>
      <div className="container-fluid detail-container">
        <BookCover googleBook={googleBook} />
        <BookTitle googleBook={googleBook} />
        <Authors googleBook={googleBook} />
        <Icons googleBook={googleBook} />
        <FriendsWhoLend />
        <MyReview />
      </div>
    </PrivateTemplate>
  ) : (
    <div className="spinner">
      <Spinner animation="border" variant="warning" />
    </div>
  );
};

export default Detail;
