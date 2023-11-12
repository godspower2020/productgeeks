import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import Usability from "../components/homeComponents/Usability";
import VisualDesign from "../components/homeComponents/VisualDesign";
import Functionality from "../components/homeComponents/Functionality";
import { Link, useParams  } from "react-router-dom";
import products from "../data/Products";

const SingleProduct = ({ match }) => {
  const { id } = useParams();

  const product = products.find((p) => String(p._id) === id);

  return (
    <>
      <Header />
      <div className="single-product">
        <div className="single-product-info">
          <div className="brand">
            <div className="mt-2 mx-2 d-flex align-items-center">
              <div>
                <img src={product.productLogo} alt={product.brandName} />
              </div>
              <div className="shoptext px-2">
                <div>
                  {product.brandName}
                </div>
                <div className="category d-flex">
                  {product.category.map((item, index) => (
                    <div>
                      {(index ? ', ' : '') + item} 
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="rating">
            <Usability
              value={product.usability}
            />
            <Functionality
              value={product.functionality}
            />
            <VisualDesign
              value={product.visualDesign}
            />
          </div>
          <div className="interest">
            <p>add to interest</p>
            <span></span>
          </div>
          <div className="details">
            <p>add to interest</p>
            <p>{product.about}</p>
          </div>
          <div className="location">
          <p>{product.foundedDate}</p>
          </div>
          <div className="Employees">
          <p>{product.foundedDate}</p>
          </div>
          <div className="Funding">
          <p>{product.foundedDate}</p>
          </div>
          <div className="Founded Date">
            <p>{product.foundedDate}</p>
          </div>
          <div className="Founders">
            {product.founders}
          </div>
          <div className="contact">
            <p>{product.brandName}</p>
          </div>
        </div>
        <div className="single-product-flows">
          
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
