import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ReactComponent as Eye } from '../../../../misc/images/eye.svg';
import { ReactComponent as EyeFill } from '../../../../misc/images/eye-fill.svg';

import {
  getOneBook,
  deleteOneBook,
  addOneBook,
} from '../../../../../services/api';

const EyeComponent = ({ bookObj }) => {
  const token = localStorage.getItem('token');
  const { googleId } = useParams();

  const [read, setRead] = useState({});
  const [savedBook, setSavedBook] = useState({});

  useEffect(async () => {
    try {
      const response = await getOneBook(googleId, token);
      if (response[0] === null) {
        setRead(false);
      } else {
        setRead(true);
        setSavedBook({ ...response[0] });
      }
    } catch (error) {
      throw new Error({ message: error });
    }
  }, [read]);

  const {
    title, authors, description, imageLinks, id,
  } = bookObj;

  const reqBody = {
    title,
    authors,
    description,
    imgLink: imageLinks.thumbnail,
    googleID: id,
  };

  const eyeOnClick = async () => {
    if (read) {
      await deleteOneBook(savedBook._id, token);
      setRead(false);
    } else {
      const response = await addOneBook(reqBody, token, googleId);
      setSavedBook({ ...response });
      setRead(true);
    }
  };

  return savedBook && read ? (
    <EyeFill onClick={eyeOnClick} />
  ) : (
    <Eye onClick={eyeOnClick} />
  );
};

export default EyeComponent;
