import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
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
      <div className="container-fluid">
        <div className="single-product">
          <div className="single-product-info">
            <div className="mt-2 mb-3 brand-cat-web">
              <div className="single-product-brand">
                <img className="sp-img" src={product.productLogo} alt={product.brandName} />
              </div>
              <div className="single-product-cat-web px-3">
                <div>
                  <h3>{product.brandName}</h3>
                </div>
                {product.category.map((item, index) => (
                  <span>
                    {(index ? ', ' : '') + item} 
                  </span>
                ))}
                <div>
                  <p>{product.description.website}</p>
                </div>
              </div>
            </div>
            <div className="rating">
              <div>
                <p>usability</p>
                <Usability
                  value={product.description.usability}
                />
              </div>
              <div>
                <p>functionality</p>
                <Functionality
                  value={product.description.functionality}
                />
              </div>
              <div>
                <p>visualDesign</p>
                <VisualDesign
                  value={product.description.visualDesign}
                />
              </div>
            </div>
            <hr />
            <div className="interest">
              <p>Add to interest</p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round" />
              </label>
            </div>
            <hr />
            <div className="details">
              <h5>Details</h5>
              <p className="mt-3">{product.description.about}</p>
            </div>
            <div className="location">
              <h5 className="mt-3">Location</h5>
              <p>{product.description.location}</p>
            </div>
            <div className="employees">
              <h5 className="mt-3">Employees</h5>
              <p>{product.description.employees}</p>
            </div>
            <div className="funding">
              <h5 className="mt-3">Funding</h5>
              <p>{product.description.funding}</p>
            </div>
            <div className="founded-date">
              <h5 className="mt-3">Founded date</h5> 
              <p>{product.description.foundedDate}</p>
            </div>
            <div className="founders">
              <h5 className="mt-3">Founders</h5>
              {product.description.founders.map((item, index) => (
                <span>
                  {(index ? ', ' : '') + item} 
                </span>
              ))}
            </div>
            <div className="contact-mail">
              <h5 className="mt-3">contact</h5>
              <p>{product.description.mail}</p>
            </div>
          </div>
          <div className="single-product-flows">
            <div className="screen-video-button">
              <p>screens</p>
              {/* <p>Video Process Flow</p> */}
            </div>
            <div>
              <p>onboarding</p>
              <div className="product-flows">
                <div className="flow">
                  {product.screensFlow.map((item) => (
                    <img src={item} alt={product.brandName} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
