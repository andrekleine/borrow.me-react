import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ReactComponent as StarFill } from '../../../misc/images/star-fill.svg';
import { ReactComponent as Star } from '../../../misc/images/star.svg';

import { getOneReview, changeOneReview } from '../../../../services/api';

import ReviewsModal from './Reviews/ReviewsModal';

const StarComponent = () => {
  const token = localStorage.getItem('token');
  const { googleId } = useParams();

  const [myReview, setMyReview] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(async () => {
    try {
      const response = await getOneReview(googleId, token);
      if (response !== null) {
        setMyReview({ ...response[1] });
        setAllReviews({ ...response[0] });
      }
    } catch (error) {
      throw new Error({ message: error });
    }
  }, []);

  const reviewOnClick = async () => {
    setShowModal(!showModal);
  };

  const addReview = async () => {};

  return allReviews ? (
    <div>
      <Star onClick={reviewOnClick} />
      <ReviewsModal
        showModal={showModal}
        reviewOnClick={reviewOnClick}
        addReview={addReview}
      />
    </div>
  ) : (
    <p />
  );
};

export default StarComponent;
