import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

const StarRating = ({ setReview, review }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    const chosenStars = rate / 20;
    setReview({ ...review, stars: chosenStars });
    console.log(chosenStars);
  };

  return (
    <div className="star-rating">
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        allowHalfIcon={true}
      />
    </div>
  );
};

export default StarRating;
