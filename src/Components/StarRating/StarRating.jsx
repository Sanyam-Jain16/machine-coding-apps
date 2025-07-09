import React, { useState } from "react";

const StarRating = ({ starCount = 5 }) => {
  const [startValue, setStarValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);
  return (
    <>
      <h1>StarRating</h1>
      <div className="star-rating">
        {new Array(starCount).fill(0).map((_value, index) => (
          <span
            style={{ cursor: "pointer" }}
            key={index}
            className={
              (hoverValue === 0 && index < startValue) || index < hoverValue
                ? "gold"
                : ""
            }
            onClick={() => setStarValue(index + 1)}
            onMouseEnter={() => setHoverValue(index + 1)}
            onMouseLeave={() => setHoverValue(0)}
          >
            &#9733;
          </span>
        ))}
      </div>
    </>
  );
};

export default StarRating;
