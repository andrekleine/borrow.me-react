import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ReactComponent as StarFill } from '../../../../misc/images/star-fill.svg';
import { ReactComponent as Star } from '../../../../misc/images/star.svg';

import { getOneReview } from '../../../../../services/api';

import AddReviewModal from './Modals/AddReviewModal';
import DeleteReviewModal from './Modals/DeleteReviewModal';

const StarComponent = () => {
  const token = localStorage.getItem('token');
  const { googleId } = useParams();

  const [myReview, setMyReview] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {}, [myReview._id]);

  useEffect(async () => {
    try {
      const apiMyReviewCall = await getOneReview(googleId, token);
      setMyReview({ ...apiMyReviewCall[0] });
    } catch (error) {
      throw new Error({ message: error });
    }
  }, []);

  const reviewOnClick = async () => {
    if (myReview._id) {
      setShowDeleteModal(!showDeleteModal);
    } else {
      setShowAddModal(!showAddModal);
    }
  };

  return myReview._id || myReview._id === undefined ? (
    <div>
      {myReview._id ? (
        <StarFill onClick={reviewOnClick} />
      ) : (
        <Star onClick={reviewOnClick} />
      )}

      <AddReviewModal
        myReview={myReview}
        setMyReview={setMyReview}
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
        reviewOnClick={reviewOnClick}
      />
      <DeleteReviewModal
        myReview={myReview}
        setMyReview={setMyReview}
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        reviewOnClick={reviewOnClick}
      />
    </div>
  ) : (
    <p />
  );
};

export default StarComponent;
