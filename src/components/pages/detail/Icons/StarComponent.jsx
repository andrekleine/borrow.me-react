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

  const [myReview, setMyReview] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(async () => {
    try {
      const response = await getOneReview(googleId, token);
      setMyReview({ ...response[0] });
    } catch (error) {
      throw new Error({ message: error });
    }
  }, [showAddModal, showDeleteModal]);

  const reviewOnClick = async () => {
    if (myReview._id) {
      setShowDeleteModal(!showDeleteModal);
    } else {
      setShowAddModal(!showAddModal);
    }
  };

  return myReview ? (
    <div>
      {myReview._id ? (
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
