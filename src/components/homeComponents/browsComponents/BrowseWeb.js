import React from 'react'
import Browse from "./Browse";

const BrowseWeb = ({ products, loading, error, style }) => {
    const webProducts = products.filter((product) => product.platform === 'Web');

    return (
      <div className="container-product mobile-web-category" style={style}>
        <div className="section">
          <div className="row">
            <div className="products">
              <h3 className="browse">Browse</h3>
              <Browse platform="Web" products={webProducts} loading={loading} error={error} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default BrowseWeb