import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

const StarRating = ({ setStars }) => {
  const [rating, setRating] = useState(0); // initial rating value

  const handleRating = (rate) => {
    setStars(rate);
    console.log('RATE --->', rate);
    console.log('RATING --->', rating);
  };

  return (
    <div className="App">
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        allowHalfIcon={true}
      />
    </div>
  );
};

export default StarRating;
