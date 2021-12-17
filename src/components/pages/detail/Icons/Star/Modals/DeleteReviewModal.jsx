import React from 'react';
import { Modal } from 'react-bootstrap';

import { ReactComponent as XCircleFill } from '../../../../../misc/images/x-circle-fill.svg';
import { ReactComponent as CheckCircleFill } from '../../../../../misc/images/check-circle-fill.svg';

import { deleteOneReview } from '../../../../../../services/api';

const DeleteReviewModal = ({
  myReview,
  setMyReview,
  showDeleteModal,
  setShowDeleteModal,
  reviewOnClick,
}) => {
  const token = localStorage.getItem('token');

  const handleSubmit = async () => {
    if (myReview._id) {
      await deleteOneReview(myReview._id, token);
      setMyReview('');
      setShowDeleteModal(false);
    }
  };

  return myReview ? (
    <Modal show={showDeleteModal} onHide={reviewOnClick} className="modal">
      <Modal.Body>
        <div className="del-review-modal-top">
          <h1 className="delete-modal-title">
            Do you wish to delete your review?
          </h1>
        </div>
        <div className="del-review-modal-middle">
          <XCircleFill onClick={reviewOnClick} />
          <CheckCircleFill onClick={handleSubmit} />
        </div>
      </Modal.Body>
    </Modal>
  ) : (
    <p />
  );
};

export default DeleteReviewModal;
