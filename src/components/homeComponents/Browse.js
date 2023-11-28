import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";

import Slider from "./Slider";

const Browse = ({ products, platform }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    (new URLSearchParams(useLocation().search)).get('category') || 'All'
  );

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    queryParams.set('category', category);
    navigate({ search: queryParams.toString() });
  };

  const categories = Array.from(new Set(products.flatMap((product) => product.category)));

  return (
    <>
      <div className="category mb-4 px-2">
        {categories.map((category) => (
          <Link
            key={category}
            to={{
              pathname: "/",
              search: `?category=${category}`,
            }}
            className={`categoryButton ${selectedCategory === category ? "activeCategory" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </Link>
        ))}
      </div>
      <div className="product-case">
        {products.map((product) => (
          <div className={`mobile-product-screen ${platform === "Mobile" ? "" : "web-product-screen"}`} key={product._id}>
            <>
              <div className="shop-product" key={product._id}>
                <div className="shopBack">
                  <Slider images={product.screensFlow} productId={product._id} />
                </div>
              </div>
              <div className="product-brand-cat mt-2">
                <div className="product-brand">
                  <img src={product.productLogo} alt={product.brandName} />
                </div>
                <div className="shoptext px-2">
                  <Link to={`/products/${product._id}`}>
                    {product.brandName}
                  </Link>
                  <div className="category">
                    {product.category.map((item, index) => (
                      <Link to={`/products/${product._id}`}>
                        {(index ? ', ' : '') + item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </>
          </div>
        ))}
      </div>
    </>
  )
}

export default Browse