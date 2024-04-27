import React from "react";

const GrowLoading = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-grow text-secondary"
        role="status"
        style={{ width: "20px", height: "20px" }}
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

const SearchSpinnerLoading = () => {
  return (
    <div className="mx-2 my-3">
      <div 
        className={`spinner-border text-grey`}
        role="status"
        style={{ width: "20px", height: "20px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

SpinnerLoading.defaultProps = {
  variant: "text-white",
};

export { GrowLoading, SpinnerLoading, SearchSpinnerLoading };