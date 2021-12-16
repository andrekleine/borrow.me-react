import React from 'react';
import { useParams } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

import { ReactComponent as XCircleFill } from '../../../../../misc/images/x-circle-fill.svg';
import { ReactComponent as CheckCircleFill } from '../../../../../misc/images/check-circle-fill.svg';

import { addOneBook } from '../../../../../../services/api';

const AddBookModal = ({
  googleBook,
  showAddBookModal,
  setShowAddBookModal,
  eyeOnClick,
  setMyBook,
}) => {
  const { googleId } = useParams();
  const token = localStorage.getItem('token');

  const {
    title, authors, description, imageLinks, id,
  } = googleBook;

  const reqBody = {
    title,
    authors,
    description,
    imgLink: imageLinks.thumbnail,
    googleID: id,
  };

  const handleSubmit = async () => {
    const apiAddBook = await addOneBook(reqBody, token, googleId);
    setMyBook({ ...apiAddBook });
    setShowAddBookModal(!showAddBookModal);
  };

  return (
    <Modal show={showAddBookModal} onHide={eyeOnClick} className="modal">
      <Modal.Body>
        <div className="del-review-modal-top">
          <h1 className="delete-modal-title">Did you read this book?</h1>
        </div>
        <div className="del-review-modal-middle">
          <XCircleFill type="button" onClick={eyeOnClick} />
          <CheckCircleFill type="button" onClick={handleSubmit} />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddBookModal;
