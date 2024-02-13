import React from "react";

const GrowLoading = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-grow text-secondary"
        role="status"
        style={{ width: "30px", height: "30px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

const SpinnerLoading = ({ variant }) => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className={`spinner-border ${variant}`}
        role="status"
        style={{ width: "23px", height: "23px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

SpinnerLoading.defaultProps = {
  variant: "text-white",
};

export { GrowLoading, SpinnerLoading };