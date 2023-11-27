import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import Carousel from "./../components/homeComponents/Carousel";
// import Screens from "./../components/homeComponents/Screens";
import Footer from "./../components/Footer";
import Prompt from "../components/AuthComponents/Prompt";

import products from "../data/Products";
import Slider from "../components/Slider";

const HomeScreen = () => {
  const [platform, setPlatform] = useState('Mobile');

  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Carousel />
      <div className="container-product mobile-web-category">
        <div className="section">
          <div className="row">
            <div className="products">
              <h3 className="browse">Browse</h3>
              <div className="category">
                
              </div>
              <div className="product-case">
                {products.map((product) => (
                  <div className={platform === "Mobile" ? "product-screen" : ""}>
                    {platform === "Mobile" ? (
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
      {/* <Screens /> */}
      <Prompt />
      <Footer />
    </div>
  );
};

export default HomeScreen;
