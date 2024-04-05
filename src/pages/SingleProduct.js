import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";

import Header from "../components/Header";
import Rating from "../components/Rating";
import { listProductDetails } from "../redux/actions/ProductActions";
import Message from "../components/LoadingError/Error";
import { GrowLoading } from "../components/LoadingError/Loading";
import OnboardingComponent from "../components/homeComponents/SingleApp/onboarding/OnboardingComponent";
import ReviewComponent from "../components/homeComponents/SingleApp/review/ReviewComponent";
import Toast from "../components/LoadingError/Toast";

const SingleProduct = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [showRating, setShowRating] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    setSelectedVersion(id);
    dispatch(listProductDetails(selectedVersion || id)); 
  }, [dispatch, id, selectedVersion]);

  const goBackToBrowse = () => {
    const browsePath = product && product.platform === 'Web' ? '/browse/web/apps' : '/browse/mobile/apps';
    navigate(browsePath);
  };

  const handleReviewAdded = () => {
    toast.success("Review Added")
  };

  const handleReviewEdited = () => {
    toast.success("Review updated successfully")
  };

  const handleVersionChange = (e) => {
    setSelectedVersion(e.target.value);
    navigate(`/apps/${e.target.value}`);
  };

  const defaultProduct = product && product.product

  return (
    <>
      <Toast />
      <Header />
      <div className="container-single-product">
        {
          loading ? (
            <div className="d-flex justify-content-center align-items-center gap-3">
              {[...Array(3)].map((_, index) => (
                <GrowLoading key={index} />
              ))}
            </div>
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <>
              <div className="back my-2" onClick={goBackToBrowse}>
                <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
              </div>
              {defaultProduct && (
                <div className="single-product">
                  <div className="single-product-info">
                    <div className="mt-2 mb-3 brand-cat-web">
                      {defaultProduct && defaultProduct.productLogo && (
                        <div className="single-product-brand">
                          <img className="sp-img" src={defaultProduct.productLogo.url} alt={defaultProduct.brandName} />
                        </div>
                      )}
                      <div className="single-product-cat-web px-2">
                        <div>
                          <h3>{defaultProduct && defaultProduct.brandName}</h3>
                        </div>
                        {defaultProduct && defaultProduct.categories && defaultProduct.categories.map((item, index) => {
                          return (
                            <span key={index}>
                              {(index ? ', ' : '') + item.name}
                            </span>
                          );
                        })}
                      </div>
                    </div> 
                    {defaultProduct && defaultProduct.numReviews > 0 && (
                      <div>
                        <p>{defaultProduct.numReviews} {defaultProduct.numReviews === 1 ? 'review' : 'reviews'}</p>
                      </div>
                    )}
                    <div className="rating">
                      <div>
                        <p>usability</p>
                        <Rating value={defaultProduct.usability} />
                      </div>
                      <div>
                        <p>functionality</p>
                        <Rating value={defaultProduct.functionality} />
                      </div>
                      <div>
                        <p>visualDesign</p>
                        <Rating value={defaultProduct.visualDesign} />
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
                      <p className="mt-3">{defaultProduct && defaultProduct.description && defaultProduct.description.about ? defaultProduct.description.about : ""}</p>
                    </div>
                    <div className="website">
                    <h5 className="mt-3">website</h5>
                      <p>{defaultProduct && defaultProduct.description && defaultProduct.description.website}</p>
                    </div>
                    <div className="location">
                      <h5 className="mt-3">Location</h5>
                      <p>{defaultProduct && defaultProduct.description && defaultProduct.description.location ? defaultProduct.description.location : ""}</p>
                    </div>
                    <div className="employees">
                      <h5 className="mt-3">Employees</h5>
                      <p>{defaultProduct && defaultProduct.description && defaultProduct.description.employees ? defaultProduct.description.employees : ""}</p>
                    </div>
                    <div className="funding">
                      <h5 className="mt-3">Funding</h5>
                      <p>{defaultProduct && defaultProduct.description && defaultProduct.description.funding ? defaultProduct.description.funding : ""}</p>
                    </div>
                    <div className="founded-date">
                      <h5 className="mt-3">Founded date</h5>
                      <p>{defaultProduct && defaultProduct.description && defaultProduct.description.foundedDate ? defaultProduct.description.foundedDate : ""}</p>
                    </div>
                    <div className="founders">
                      <h5 className="mt-3">Founders</h5>
                      {defaultProduct && defaultProduct.description && defaultProduct.description.founders && defaultProduct.description.founders.map((item, index) => (
                        <span key={index}>
                          {(index ? ', ' : '') + item}
                        </span>
                      ))}
                    </div>
                    <div className="contact-mail">
                      <h5 className="mt-3">contact</h5>
                      <p>{defaultProduct && defaultProduct.description && defaultProduct.description.email ? defaultProduct.description.email : ""}</p>
                    </div>
                  </div>
                  <div className="single-product-flows">
                    <div className="onboarding-rating-version-button">
                      <div className="onboarding-rating-button">
                        <div className={`onboarding-button ${showOnboarding ? 'active' : ''}`} onClick={() => { setShowOnboarding(true); setShowRating(false); }}>
                          <p className="">Onboarding</p>
                        </div>
                        <div className={`rating-button ${showRating ? 'active' : ''}`} onClick={() => { setShowOnboarding(false); setShowRating(true); }}>
                          <p className="">Reviews</p>
                        </div>
                      </div>
                      <div className="version">
                        <p className="version-text">version</p>
                        <div className="version-button">
                          <select onChange={handleVersionChange} value={selectedVersion}>
                            {product && product.relatedProducts && product.relatedProducts.map((relatedProduct, index) => (
                              <option key={index} value={relatedProduct._id}>
                                {relatedProduct.version ? relatedProduct.version : "No version"}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    {showOnboarding && (
                      <OnboardingComponent defaultProduct={defaultProduct} />
                    )}
                    {showRating && (
                      <ReviewComponent defaultProduct={defaultProduct} id={id} onReviewAdded={handleReviewAdded} onReviewEdited={handleReviewEdited} />
                    )}
                  </div>
                </div>
              )}
            </>
          )
        }
      </div>
    </>
  );
};

export default SingleProduct;
