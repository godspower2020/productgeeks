import React from 'react'
import Browse from "../browsScreen/Browse";

const BrowseWeb = ({ products }) => {
    const webProducts = products.filter((product) => product.platform === 'Web');

    return (
      <div className="container-product mobile-web-category">
        <div className="section">
          <div className="row">
            <div className="products">
              <h3 className="browse">Browse</h3>
              <Browse platform="Web" products={webProducts} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default BrowseWeb