import { useState } from "react";
import "./star-rating.css";

const StarRating = ({ starCount = 5 }) => {
  const [starValue, setStarValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  const handleClick = (e, index) => {
    const { left, width } = e.target.getBoundingClientRect();
    console.log(left);
    console.log(width);
    console.log(e.clientX);
    const clickX = e.clientX - left;

    // if clicked in first half -> 0.5 star, else full star
    const newValue = clickX < width / 2 ? index + 0.5 : index + 1;
    setStarValue(newValue);
  };

  const getStarClass = (index) => {
    const value = hoverValue || starValue;

    if (value >= index + 1) return "full"; // full star
    if (value >= index + 0.5) return "half"; // half star
    return "empty"; // empty star
  };

  return (
    <>
      <h1>StarRating</h1>
      <div>
        {new Array(starCount).fill(0).map((_value, index) => (
          <span
            style={{ cursor: "pointer" }}
            key={index}
            className={`star ${getStarClass(index)}`}
            onClick={(e) => handleClick(e, index)}
            onMouseEnter={() => setHoverValue(index + 1)}
            onMouseLeave={() => setHoverValue(0)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <p>
        {starValue} / {starCount}
      </p>
    </>
  );
};

export default StarRating;
