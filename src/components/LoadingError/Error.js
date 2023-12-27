import React, { useState } from "react";

const Message = ({ variant, children }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className={`alert ${variant} alert-dismissible fade show`}>
          {children}
          <button
            type="button"
            className="btn-close"
            onClick={handleClose}
            aria-label="Close"
          ></button>
        </div>
      )}
    </>
  );
};

Message.defaultProps = {
  variant: "alert-info",
};

export default Message;
