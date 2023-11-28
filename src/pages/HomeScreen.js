import React, { useState } from "react";
import Header from "./../components/Header";
import Carousel from "./../components/homeComponents/Carousel";
import Footer from "./../components/Footer";
import Prompt from "../components/AuthComponents/Prompt";

import products from "../data/Products";
import Browse from "../components/homeComponents/Browse";

const HomeScreen = () => {
  const [platform] = useState('Mobile');

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
              <Browse platform={platform} products={products} />
            </div>
          </div>
        </div>
      </div>
      <Prompt />
      <Footer />
    </div>
  );
};

export default HomeScreen;
