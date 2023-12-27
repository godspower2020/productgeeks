import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ component: Component, ...rest }) => {
  const token = window.localStorage.getItem("userInfo");

  if (token) {
    return <Component />;
  } else {
    return <Navigate to="/" state={{ from: rest.location }} replace />;
  }
};

export default PrivateRouter;
