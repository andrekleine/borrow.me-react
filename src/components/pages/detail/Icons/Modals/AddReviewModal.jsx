import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

import { ReactComponent as CheckCircleFill } from '../../../../misc/images/check-circle-fill.svg';
import { ReactComponent as XCircleFill } from '../../../../misc/images/x-circle-fill.svg';

import { addOneReview } from '../../../../../services/api';

import StarRating from '../Reviews/StarRating';
import Comments from '../Reviews/Comments';

const AddReviewModal = ({
  showAddModal, reviewOnClick, setShowAddModal, setHasReview,
}) => {
  const token = localStorage.getItem('token');
  const { googleId } = useParams();

  const [review, setReview] = useState({ stars: null, text: '' });

  const handleSubmit = async () => {
    if (review) {
      await addOneReview(review, token, googleId);
      setShowAddModal(!showAddModal);
      setHasReview(true);
    }
  };

  return (
    <Modal show={showAddModal} onHide={reviewOnClick} className="modal">
      <Modal.Body>
        <div className="add-review-modal-top">
          <XCircleFill type="button" onClick={reviewOnClick} />
        </div>
        <div className="add-review-modal-middle">
          <h1 className="review-modal-title">Add a review:</h1>
          <StarRating setReview={setReview} review={review} />
          <Comments setReview={setReview} review={review} />
        </div>
        <div className="add-review-modal-bottom">
          <h1 className="review-modal-title-add">Add!</h1>
          <CheckCircleFill type="button" onClick={handleSubmit} />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddReviewModal;
