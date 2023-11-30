import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";

import Slider from "./Slider";
import FilterCategorySlider from './FilterCategorySlider';

const Browse = ({ products, platform }) => {
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
      <FilterCategorySlider
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryClick={handleCategoryClick}
      />
      <div className="product-case">
        {filteredProducts.map((product) => (
          <div
            className={`mobile-product-screen ${platform === 'Mobile' ? '' : 'web-product-screen'}`}
            key={product._id}
          >
            <>
              <div className="shop-product" key={product._id}>
                <div className="shopBack">
                  <Slider images={product.screensFlow} productId={product._id} />
                </div>
              </div>
              <div className="product-brand-cat mt-3">
                <div className="product-brand">
                  <img src={product.productLogo} alt={product.brandName} />
                </div>
                <Link to={`/products/${product._id}`} className="shoptext px-2">
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
            </>
          </div>
        ))}
      </div>
    </>
  )
}

export default Browse 