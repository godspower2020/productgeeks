import React from "react";
import { ToastContainer } from "react-toastify";

const Toast = () => {
  return (
    <div>
      <style>{`
        .Toastify__toast-container {
          height: 30px;
        }
        .Toastify__progress-bar {
          height: 2px; 
        }
      `}</style>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
    </div>
  );
};

export default Toast;
