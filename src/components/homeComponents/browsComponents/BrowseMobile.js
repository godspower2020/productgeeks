import React from 'react'

import Browse from "./Browse";

const BrowseMobile = ({ products, loading, error, style }) => {
  const mobileProducts = products.filter((product) => product.platform === 'Mobile');

  return (
    <div className="container-product mobile-web-category" style={style}>
      <div className="section">
        <div className="row">
          <div className="products">
            <h3 className="browse">Browse</h3>
            <Browse platform="Mobile" products={mobileProducts} loading={loading} error={error} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseMobile