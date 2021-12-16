import React from 'react';
import { Modal } from 'react-bootstrap';

import { ReactComponent as XCircleFill } from '../../../../misc/images/x-circle-fill.svg';
import { ReactComponent as CheckCircleFill } from '../../../../misc/images/check-circle-fill.svg';

import { deleteOneBook } from '../../../../../services/api';

const DeleteBookModal = ({
  showDeleteBookModal,
  eyeOnClick,
  setShowDeleteBookModal,
  setRead,
  savedBook,
}) => {
  const token = localStorage.getItem('token');

  const handleSubmit = async () => {
    await deleteOneBook(savedBook._id, token);
    setRead(false);
    setShowDeleteBookModal(false);
  };

  return savedBook ? (
    <Modal show={showDeleteBookModal} onHide={eyeOnClick} className="modal">
      <Modal.Body>
        <div className="del-review-modal-top">
          <h1 className="delete-modal-title">
            Do you wish to delete this book from your collection?
          </h1>
        </div>
        <div className="del-review-modal-middle">
          <XCircleFill type="button" onClick={eyeOnClick} />
          <CheckCircleFill type="button" onClick={handleSubmit} />
        </div>
      </Modal.Body>
    </Modal>
  ) : (
    <p />
  );
};

export default DeleteBookModal;
