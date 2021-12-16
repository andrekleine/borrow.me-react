import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './Detail.css';

import PrivateTemplate from '../../templates/Private/PrivateTemplate';
import BookCover from './BookCover/BookCover';
import Authors from './Authors/Authors';
import Icons from './Icons/Icons';
import MyReview from './MyReview/MyReview';
import PeopleBorrow from './PeopleBorrow/PeopleBorrow';

import { getOneGoogleBook } from '../../../services/googleBooks';

const Detail = () => {
  const { googleId } = useParams();

  const [bookObj, setBookObj] = useState({});
  const [hasReview, setHasReview] = useState();
  const [peopleBorrow, setPeopleBorrow] = useState();

  useEffect(async () => {
    try {
      const response = await getOneGoogleBook(googleId);
      const { volumeInfo, id } = response;
      setBookObj({ ...volumeInfo, id });
    } catch (error) {
      throw new Error({ message: error });
    }
  }, [peopleBorrow, hasReview]);

  return bookObj.id && MyReview ? (
    <PrivateTemplate>
      <div className="container-fluid detail-container">
        <BookCover bookObj={bookObj} />
        <h1 className="detail-title">{bookObj.title}</h1>
        <Authors bookObj={bookObj} />
        <Icons bookObj={bookObj} setHasReview={setHasReview} />
        <PeopleBorrow setPeopleBorrow={setPeopleBorrow} />
        {hasReview && <MyReview />}
      </div>
    </PrivateTemplate>
  ) : (
    <p />
  );
};

export default Detail;
