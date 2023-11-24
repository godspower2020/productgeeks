import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import products from "../../data/Products";
import Slider from "../Slider";

const Screens = () => {
  const [platform, setPlatform] = useState('Mobile');

  return (
    <>
      <div className="container-product mobile-web-category">
        <div className="section">
          <div className="row">
            <div className="products">
              <h3 className="browse">Browse</h3>
              <div className="category">
                
              </div>
              <div className="product-case-center">
                <div className="product-case">
                  {products.map((product) => (
                    <div className={platform === "Mobile" ? "product-screen-info" : ""}>
                      {platform === "Mobile" ? (
                        <>
                          <div
                            className="shop-product"
                            key={product._id}
                          >
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
                      ) : (
                        <>
                          <div className="">
                            <div className="web-screen">
                              <img src="/images/web-screen.png" alt="web platform screen" />
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
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Screens;


