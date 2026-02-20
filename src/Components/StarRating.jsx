import React from "react";

const StarRating = ({ rate = 0 }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rate)) {
      stars.push(
        <span key={i} className="star filled">
          ★
        </span>,
      );
    } else {
      stars.push(
        <span key={i} className="star">
          ☆
        </span>,
      );
    }
  }

  return (
    <div className="rating">
      {stars}
      <span className="rating-number"> ({rate})</span>
    </div>
  );
};

export default StarRating;
