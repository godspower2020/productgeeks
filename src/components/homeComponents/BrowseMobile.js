import React from 'react'

import Browse from '../browsScreen/Browse'

const BrowseMobile = ({ products }) => {
  const mobileProducts = products.filter((product) => product.platform === 'Mobile');

  return (
    <div className="container-product mobile-web-category">
      <div className="section">
        <div className="row">
          <div className="products">
            <h3 className="browse">Browse</h3>
            <Browse platform="Mobile" products={mobileProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseMobile