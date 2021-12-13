import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import { ReactComponent as PlusCircleFill } from '../../../../misc/images/plus-circle-fill.svg';
import { ReactComponent as XCircleFill } from '../../../../misc/images/x-circle-fill.svg';

import StarRating from './StarRating';

const ReviewsModal = ({ showModal, reviewOnClick, addReview }) => {
  const [stars, setStars] = useState();

  return (
    <Modal show={showModal} onHide={reviewOnClick}>
      <Modal.Body>
        <h1 className="review-modal-title">Add a review to this book!</h1>
        <StarRating setStars={setStars} />
      </Modal.Body>
      <Modal.Footer>
        <XCircleFill type="button" onClick={reviewOnClick} />
        <PlusCircleFill type="button" onClick={addReview} />
      </Modal.Footer>
    </Modal>
  );
};

export default ReviewsModal;
