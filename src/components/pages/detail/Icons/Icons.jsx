import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ReactComponent as Eye } from '../../../misc/images/eye.svg';
import { ReactComponent as EyeFill } from '../../../misc/images/eye-fill.svg';
import { ReactComponent as Star } from '../../../misc/images/star.svg';
import { ReactComponent as StarFill } from '../../../misc/images/star-fill.svg';
// import { ReactComponent as StarHalf } from '../../../misc/images/star-half.svg';
import { ReactComponent as Book } from '../../../misc/images/book.svg';
import { ReactComponent as BookFill } from '../../../misc/images/book-fill.svg';

import { deleteOneBook, addOneBook } from '../../../../services/api';

const Icons = ({ bookObj }) => {
  const token = localStorage.getItem('token');
  const { bookId } = useParams();

  const { title, authors, description, imgLink, googleID } = bookObj;
  const body = JSON.stringify({
    title,
    authors,
    description,
    imgLink,
    googleID,
  });

  const [icons, setIcons] = useState({
    read: false,
    review: false,
    lend: false,
  });

  const toggleBool = (boolVariable) => {
    const toggle = boolVariable ? !boolVariable : boolVariable;
    return toggle;
  };

  const eyeOnClick = async () => {
    if (icons.read) {
      await deleteOneBook(bookId, token);
      toggleBool(icons.read);
    } else {
      await addOneBook(body, token, googleID);
      toggleBool(icons.read);
    }
  };

  return (
    <div className="icons">
      {icons.read ? (
        <EyeFill onClick={eyeOnClick} />
      ) : (
        <Eye onClick={eyeOnClick} />
      )}
      {icons.review ? <StarFill /> : <Star />}
      {icons.lend ? <BookFill /> : <Book />}
    </div>
  );
};

export default Icons;
