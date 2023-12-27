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
        : products.filter((product) => product.category.includes(selectedCategory))
    );
  }, [selectedCategory, products]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    queryParams.set('category', category);
    navigate({ search: queryParams.toString() });
  };

  const categories = Array.from(new Set(products.flatMap((product) => product.category)));

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
              categories={categories}
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
                      <Slider images={product.screensFlow} maxSlides={product.platform === 'Mobile' ? 3 : 4} productBrandName={product.brandName} productPlatform={product.platform} productId={product._id} />
                    </div>
                  </div>
                  <div className="product-brand-cat mt-3" key={`brand-cat-${product._id}`}>
                    <div key={product._id} className="product-brand">
                      <img src={product.productLogo.url} alt={product.brandName} />
                    </div>
                    <Link to={`/apps/${product._id}`} className="shoptext px-2">
                      <p>{product.brandName}</p>
                      <div className="category">
                        <span>
                          {product.category.length > 0 &&
                            (product.category
                              .map((item, index) => (index ? ', ' : '') + item)
                              .join(', ')
                              .length > 26
                              ? `${product.category.map((item, index) => (index ? ', ' : '') + item).join('').slice(0, 26)}...`
                              : product.category.map((item, index) => (index ? ', ' : '') + item).join(''))}
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

