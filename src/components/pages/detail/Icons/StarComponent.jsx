import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ReactComponent as StarFill } from '../../../misc/images/star-fill.svg';
import { ReactComponent as Star } from '../../../misc/images/star.svg';

import { getOneReview } from '../../../../services/api';

import AddReviewModal from './Reviews/AddReviewModal';
import DeleteReviewModal from './Reviews/DeleteModal';

const StarComponent = () => {
  const token = localStorage.getItem('token');
  const { googleId } = useParams();

  const [myReview, setMyReview] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(async () => {
    try {
      const response = await getOneReview(googleId, token);
      if (response !== null) {
        setMyReview({ ...response[1][0] });
        setAllReviews({ ...response[0] });
      }
    } catch (error) {
      throw new Error({ message: error });
    }
  }, []);

  const reviewOnClick = async () => {
    if (myReview.length) {
      setShowDeleteModal(!showDeleteModal);
    } else {
      setShowAddModal(!showAddModal);
    }
  };

  console.log(myReview);

  return allReviews ? (
    <div>
      {myReview.length ? (
        <StarFill onClick={reviewOnClick} />
      ) : (
        <Star onClick={reviewOnClick} />
      )}

      <AddReviewModal
        setShowAddModal={setShowAddModal}
        showAddModal={showAddModal}
        reviewOnClick={reviewOnClick}
      />
      <DeleteReviewModal
        showDeleteModal={showDeleteModal}
        reviewOnClick={reviewOnClick}
        myReview={myReview}
        setShowDeleteModal={setShowDeleteModal}
      />
    </div>
  ) : (
    <p />
  );
};

export default StarComponent;
