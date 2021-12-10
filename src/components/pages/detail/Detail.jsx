import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './Detail.css';

import PrivateTemplate from '../../templates/Private/PrivateTemplate';
import { getOneBook } from '../../../services/api';

const Detail = () => {
  const [bookObj, setBookObj] = useState({});
  const { bookId } = useParams();
  const token = localStorage.getItem('token');

  useEffect(() => {
    getOneBook(bookId, token)
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
      <div className="container-fluid detail-container">
        <img
          src={bookObj.imgLink}
          alt={bookObj.title}
          key={bookId._id}
          className="search-book-cover"
        />
      </div>
    </PrivateTemplate>
  );
};

export default Detail;
