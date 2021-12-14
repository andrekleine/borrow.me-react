import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import FixedStarRating from './FixedStarRating';

import { getOneReview } from '../../../../services/api';

const MyReview = () => {
  const token = localStorage.getItem('token');
  const { googleId } = useParams();

  const [myReview, setMyReview] = useState({});

  useEffect(async () => {
    try {
      const response = await getOneReview(googleId, token);
      setMyReview({ ...response[0] });
    } catch (error) {
      throw new Error({ message: error });
    }
  }, []);

  return myReview.stars ? (
    <div className="my-review">
      <h5 className="my-review-title">My Review:</h5>
      <FixedStarRating stars={myReview.stars} />
      <p className="my-review-text">{`"${myReview.text}"`}</p>
    </div>
  ) : (
    <p />
  );
};

export default MyReview;
