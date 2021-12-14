import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './Detail.css';

import PrivateTemplate from '../../templates/Private/PrivateTemplate';
import Icons from './Icons/Icons';
import MyReview from './MyReview/MyReview';

import { getOneGoogleBook } from '../../../services/googleBooks';

const Detail = () => {
  const { googleId } = useParams();

  const [bookObj, setBookObj] = useState({});
  const [hasReview, setHasReview] = useState();

  useEffect(async () => {
    try {
      const response = await getOneGoogleBook(googleId);
      const { volumeInfo, id } = response;
      setBookObj({ ...volumeInfo, id });
    } catch (error) {
      throw new Error({ message: error });
    }
  }, [hasReview]);

  return bookObj.id ? (
    <PrivateTemplate>
      <div className="container-fluid detail-container">
        <img
          src={bookObj.imageLinks.thumbnail}
          alt={bookObj.title}
          key={bookObj.id}
          className="detail-book-cover"
        />
        <h1 className="detail-title">{bookObj.title}</h1>
        {bookObj.authors.map((author) => {
          return (
            <h3 className="detail-author" key={author}>
              {author}
            </h3>
          );
        })}
        <Icons bookObj={bookObj} setHasReview={setHasReview} />
        {hasReview && <MyReview />}
      </div>
    </PrivateTemplate>
  ) : (
    <p />
  );
};

export default Detail;
