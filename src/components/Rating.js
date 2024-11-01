import React from "react";

const Rating = ({ value, text }) => {
  return (
    <div className="rating mx-2">
      {[...Array(5)].map((_, index) => (
        <i
          key={index}
          className={
            value >= index + 1
              ? "fas fa-star"
              : value >= index + 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      ))}
      {text && <span>{text}</span>}
    </div>
  );
};

Rating.defaultProps = {
  variant: "text-white",
};

export default Rating;
