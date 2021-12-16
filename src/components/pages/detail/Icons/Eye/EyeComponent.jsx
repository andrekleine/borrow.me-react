import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ReactComponent as Eye } from '../../../../misc/images/eye.svg';
import { ReactComponent as EyeFill } from '../../../../misc/images/eye-fill.svg';

import AddBookModal from './Modals/AddBookModal';
import DeleteBookModal from './Modals/DeleteBookModal';

import { getOneBook } from '../../../../../services/api';

const EyeComponent = ({ googleBook }) => {
  const { googleId } = useParams();
  const token = localStorage.getItem('token');

  const [myBook, setMyBook] = useState({});
  const [showDeleteBookModal, setShowDeleteBookModal] = useState(false);
  const [showAddBookModal, setShowAddBookModal] = useState(false);

  useEffect(async () => {
    try {
      const apiMyBookCall = await getOneBook(googleId, token);
      setMyBook({ ...apiMyBookCall[0] });
    } catch (error) {
      throw new Error({ message: error });
    }
  }, []);

  useEffect(() => {}, [myBook]);

  const eyeOnClick = async () => {
    if (myBook._id) {
      setShowDeleteBookModal(!showDeleteBookModal);
    } else {
      setShowAddBookModal(!showAddBookModal);
    }
  };

  return (
    <div>
      {myBook._id ? (
        <EyeFill onClick={eyeOnClick} />
      ) : (
        <Eye onClick={eyeOnClick} />
      )}

      {showAddBookModal && (
        <AddBookModal
          googleBook={googleBook}
          showAddBookModal={showAddBookModal}
          setShowAddBookModal={setShowAddBookModal}
          eyeOnClick={eyeOnClick}
          myBook={myBook}
          setMyBook={setMyBook}
        />
      )}

      {showDeleteBookModal && (
        <DeleteBookModal
          showDeleteBookModal={showDeleteBookModal}
          setShowDeleteBookModal={setShowDeleteBookModal}
          eyeOnClick={eyeOnClick}
          myBook={myBook}
          setMyBook={setMyBook}
        />
      )}
    </div>
  );
};

export default EyeComponent;
