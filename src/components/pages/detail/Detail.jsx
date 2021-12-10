import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './Detail.css';

import PrivateTemplate from '../../templates/Private/PrivateTemplate';
import Icons from './Icons/Icons';

import { getOneBook } from '../../../services/api';

const Detail = () => {
  const [bookObj, setBookObj] = useState({});

  const { bookId } = useParams();
  const token = localStorage.getItem('token');

  useEffect(async () => {
    try {
      const response = await getOneBook(bookId, token);
      setBookObj({ ...response });
    } catch (error) {
      throw new Error({ message: error });
    }
  }, []);

  console.log(bookObj);

  return bookObj._id ? (
    <PrivateTemplate>
      <div className="container-fluid detail-container">
        <img
          src={bookObj.imgLink}
          alt={bookObj.title}
          key={bookObj._id}
          className="detail-book-cover"
        />
        <h1 className="detail-title">{bookObj.title}</h1>
        {bookObj.authors.map((author) => {
          return <h3 className="detail-author">{author}</h3>;
        })}

        <Icons googleID={bookObj.googleID} />
      </div>
    </PrivateTemplate>
  ) : (
    <p />
  );
};

export default Detail;
