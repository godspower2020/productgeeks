import React from 'react';
import Browse from "./Browse";
import { useSelector } from 'react-redux';

const BrowseMobile = ({ products, loading, error }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const mobileProducts = products.filter((product) => product.platform === 'Mobile');

  const loggedInMargin = userInfo ? '100px' : ''; 

  return (
    <div className="container-product mobile-web-category">
      <div className="section">
        <div className="row">
          <div className="products">
            <h3 className="browse" style={{ marginTop: loggedInMargin }}>Browse</h3>
            <Browse platform="Mobile" products={mobileProducts} loading={loading} error={error} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseMobile;
