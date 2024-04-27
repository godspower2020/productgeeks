import React from 'react';
import { Link } from 'react-router-dom';
import { SearchSpinnerLoading } from './LoadingError/Loading';

const SearchResultsList = ({ products, loading, keyword }) => {
  return (
    <div className='search-results'>
      {loading ? (
        <div>
          <SearchSpinnerLoading />
        </div>
      ) : (
        <div>
          {products.length === 0 ? (
            <div className='product'>
              <div className='product-logo'>
                <i className="fa fa-align-left" aria-hidden="true"></i>
              </div>
              <div className='brand-platform-version'>
                <div>
                  <p className='brand-name'>"{keyword}"</p>
                </div>
                <div>
                  <span>No results found</span>
                </div>
              </div>
            </div>
          ) : (
            products.map((product) => (
              <Link key={product._id} to={`/apps/${product._id}`} className='product-link'>
                <div className='product'>
                  <div className='product-logo'>
                    <img src={product.productLogo.url} alt={product.brandName} />
                  </div>
                  <div className='brand-platform-version'>
                    <div>
                      <p className='brand-name'>{product.brandName}</p>
                    </div>
                    <div>
                      <p><span>{product.platform}</span> platform with version: <span>{product.version}</span></p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResultsList;
