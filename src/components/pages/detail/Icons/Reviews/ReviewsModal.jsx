import { Modal } from 'react-bootstrap';
import React from 'react';
import { ReactComponent as PlusCircleFill } from '../../../../misc/images/plus-circle-fill.svg';
import { ReactComponent as XCircleFill } from '../../../../misc/images/x-circle-fill.svg';

const ReviewsModal = ({ showModal, reviewOnClick, addReview }) => {
  return (
    <Modal show={showModal} onHide={reviewOnClick}>
      <Modal.Body>
        <h1 className="review-modal-title">Add a review to this book!</h1>
      </Modal.Body>
      <Modal.Footer>
        <XCircleFill type="button" onClick={reviewOnClick} />
        <PlusCircleFill type="button" onClick={addReview} />
      </Modal.Footer>
    </Modal>
  );
};

export default ReviewsModal;
