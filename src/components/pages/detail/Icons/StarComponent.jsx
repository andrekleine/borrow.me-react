import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ReactComponent as StarFill } from '../../../misc/images/star-fill.svg';
import { ReactComponent as Star } from '../../../misc/images/star.svg';

import { getOneReview } from '../../../../services/api';

import AddReviewModal from './Reviews/AddReviewModal';

const StarComponent = () => {
  const token = localStorage.getItem('token');
  const { googleId } = useParams();

  const [myReview, setMyReview] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showChangeModal, setShowChangeModal] = useState(false);

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
    setShowAddModal(!showAddModal);
  };

  return allReviews ? (
    <div>
      {myReview ? (
        <StarFill onClick={reviewOnClick} />
      ) : (
        <Star onClick={reviewOnClick} myReview={myReview} />
      )}

      <AddReviewModal showAddModal={showAddModal} reviewOnClick={reviewOnClick} />
    </div>
  ) : (
    <p />
  );
};

export default StarComponent;
