import React from 'react';
import { Rating } from 'react-simple-star-rating';

const FixedStarRating = ({ stars }) => {
  return (
    <Rating
      ratingValue={stars}
      allowHalfIcon
      readonly
      size={12}
      className="react-simple-star-rating"
    />
  );
};

export default FixedStarRating;
