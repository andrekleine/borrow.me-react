import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

import { ReactComponent as PlusCircleFill } from '../../../../misc/images/plus-circle-fill.svg';
import { ReactComponent as XCircleFill } from '../../../../misc/images/x-circle-fill.svg';

import { addOneReview } from '../../../../../services/api';

import StarRating from './StarRating';
import Comments from './Comments';

const ChangeReviewModal = ({ showChangeModal, reviewOnClick }) => {
  const token = localStorage.getItem('token');
  const { googleId } = useParams();

  const [review, setReview] = useState({ stars: null, text: '' });

  const handleSubmit = async () => {
    if (review) {
      await addOneReview(review, token, googleId);
    }
  };

  return (
    <Modal show={showAddModal} onHide={reviewOnClick}>
      <Modal.Body>
        <div className="add-review-modal-top">
          <XCircleFill type="button" onClick={reviewOnClick} />
        </div>
        <div className="add-review-modal-middle">
          <h1 className="review-modal-title">Add a review to this book!</h1>
          <StarRating setReview={setReview} review={review} />
          <Comments setReview={setReview} review={review} />
        </div>
        <div className="add-review-modal-bottom">
          <PlusCircleFill type="button" onClick={handleSubmit} />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ChangeReviewModal;
