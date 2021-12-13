import React from 'react';
import { Form } from 'react-bootstrap';

const Comments = ({ setReview, review }) => {
  const handleChange = (e) => {
    setReview({ ...review, text: e.target.value });
  };

  return (
    <Form className="comment-box">
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Add your comments here:"
        onChange={handleChange}
      />
    </Form>
  );
};

export default Comments;
