import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

const StarRating = ({ setReview, review }) => {
  const rating = useState(0);

  const handleRating = (rate) => {
    const chosenStars = rate / 20;
    setReview({ ...review, stars: chosenStars });
  };

  return (
    <div className="star-rating">
      <Rating onClick={handleRating} ratingValue={rating} allowHalfIcon />
    </div>
  );
};

export default StarRating;
