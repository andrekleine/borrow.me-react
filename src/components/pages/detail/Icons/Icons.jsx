import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { ReactComponent as Eye } from '../../../misc/images/eye.svg';
import { ReactComponent as EyeFill } from '../../../misc/images/eye-fill.svg';
import { ReactComponent as Star } from '../../../misc/images/star.svg';
import { ReactComponent as StarFill } from '../../../misc/images/star-fill.svg';
import { ReactComponent as StarHalf } from '../../../misc/images/star-half.svg';
import { ReactComponent as Book } from '../../../misc/images/book.svg';
import { ReactComponent as BookFill } from '../../../misc/images/book-fill.svg';

import { deleteOneBook } from '../../../../services/api';

const Icons = ({ googleID }) => {
  const { bookId } = useParams();
  const token = localStorage.getItem('token');

  const [icons, setIcons] = useState({
    read: false,
    review: false,
    lend: false,
  });

  const eyeOnClick = async () => {
    if (icons.read) {
      await deleteOneBook(bookId, token);
    } else {
    }
  };

  return (
    <div className="icons">
      {icons.read ? <EyeFill /> : <Eye />}
      {icons.review ? <StarFill /> : <Star />}
      {icons.lend ? <BookFill /> : <Book />}
    </div>
  );
};

export default Icons;
