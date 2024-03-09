import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";

import Slider from "./Slider";
import FilterCategorySlider from './FilterCategorySlider';

import { GrowLoading } from '../../LoadingError/Loading';
import Message from '../../LoadingError/Error';

const Browse = ({ products, loading, error }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    new URLSearchParams(useLocation().search).get('category') || 'All'
  );
  const [filteredProducts, setFilteredProducts] = useState(products);

  const navigate = useNavigate(); 
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    setFilteredProducts(
      selectedCategory === 'All'
        ? products
        : products.filter((product) =>
            product.categories.some((category) => category.name === selectedCategory)
          )
    );
  }, [selectedCategory, products]);  

  const handleCategoryClick = (categories) => {
    setSelectedCategory(categories);
    queryParams.set('categories', categories);
    navigate({ search: queryParams.toString() });
  };

  const uniqueCategoriesSet = new Set(products.flatMap(product => product.categories.map(category => category._id)));
  const uniqueCategories = Array.from(uniqueCategoriesSet).map(categoryId => {
      return products.find(product => product.categories.some(category => category._id === categoryId)).categories.find(category => category._id === categoryId);
  });

  return (
    <>
      {
         loading ? (
          <div className="d-flex justify-content-center align-items-center gap-3">
            {[...Array(3)].map((_, index) => (
              <GrowLoading />
            ))}
          </div>
        )
        : error ? (
          <Message variant="alert-danger">{error}</Message>
        )
        :
        (
          <>
            <FilterCategorySlider
              categories={uniqueCategories}
              selectedCategory={selectedCategory}
              loading={loading}
              handleCategoryClick={handleCategoryClick}
            />
            <div className={`product-case ${selectedCategory === 'All' ? 'all-products' : ''}`}>
              {filteredProducts.map((product) => (
                <div
                  className={`product-screen ${product.platform === 'Mobile' ? 'mobile-product-screen' : 'web-product-screen'}`}
                  key={product._id}
                >
                  <div className="shop-product" key={product._id}>
                    <div className="shopBack">
                    {product.screensFlow && product.screensFlow.length > 0 && (
                      <Slider 
                        images={product.screensFlow.map(flow => {
                          return flow.url || "";
                        })}
                        maxSlides={product.platform === 'Mobile' ? 3 : 4} 
                        productBrandName={product.brandName} 
                        productPlatform={product.platform} 
                        productId={product._id} 
                      />
                    )}
                    </div>
                  </div>
                  <div className="product-brand-cat mt-3" key={`brand-cat-${product._id}`}>
                    <div key={product._id} className="product-brand">
                      {product.productLogo && product.productLogo.url && (
                        <img src={product.productLogo.url} alt={product.brandName} />
                      )}
                    </div>
                    <Link to={`/apps/${product._id}`} className="shoptext px-2">
                      <p>{product.brandName}</p>
                      <div className="category">
                        <span>
                          {product.categories && product.categories.length > 0 ? (
                            product.categories.map((item, index) => (
                              <React.Fragment key={item._id}>
                                {index ? ', ' : ''}
                                {item.name}
                              </React.Fragment>
                            ))
                          ) : (
                            ''
                          )}
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )
      }
    </>
  )
}

export default Browse 

{/* <span>
  {product.categories && product.categories.length > 0 ? (
  product.categories
    .map((item, index) => (index ? ', ' : '') + item)
    .join(', ')
    .length > 26 ? (
      `${product.categories
        .map((item, index) => (index ? ', ' : '') + item)
        .join('')
        .slice(0, 26)}...`
    ) : (
      product.categories.map((item, index) => (index ? ', ' : '') + item).join('')
    )
  ) : (
  ''
  )}
</span> */}