import React from 'react';

const PasswordValidation = ({ validationResults, focused, formSubmitted  }) => {
   
  return (
    <div className={`password-validation ${focused ? 'visible' : ''}`}>
      <div className={`validation-item ${validationResults.minLength ? 'valid' : ''}`}>
        {validationResults.minLength ? (
          <i className="fa fa-check" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-times" aria-hidden="true"></i>
        )}
        <p>At least 8 characters</p>
      </div>
      <div className={`validation-item ${validationResults.lowercase ? 'valid' : ''}`}>
        {validationResults.lowercase ? (
          <i className="fa fa-check" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-times" aria-hidden="true"></i>
        )}
        <p>Lower case letter</p>
      </div>
      <div className={`validation-item ${validationResults.uppercase ? 'valid' : ''}`}>
        {validationResults.uppercase ? (
          <i className="fa fa-check" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-times" aria-hidden="true"></i>
        )}
        <p>Upper case letter</p>
      </div>
      <div className={`validation-item ${validationResults.number ? 'valid' : ''}`}>
        {validationResults.number ? (
          <i className="fa fa-check" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-times" aria-hidden="true"></i>
        )}
        <p>Number</p>
      </div>
      <div className={`validation-item ${validationResults.specialChar ? 'valid' : ''}`}>
        {validationResults.specialChar ? (
          <i className="fa fa-check" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-times" aria-hidden="true"></i>
        )}
        <p>Special character</p>
      </div>
    </div>
  );
};

export default PasswordValidation;
