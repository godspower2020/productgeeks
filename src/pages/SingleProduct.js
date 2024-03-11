import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Rating from "../components/Rating";
import { listProductDetails } from "../redux/actions/ProductActions";
import Message from "../components/LoadingError/Error";
import { GrowLoading } from "../components/LoadingError/Loading";
import OnboardingComponent from "../components/homeComponents/SingleApp/onboarding/OnboardingComponent";
import RatingComponent from "../components/homeComponents/SingleApp/rating/RatingComponent";
import Toast from "../components/LoadingError/Toast";

const SingleProduct = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [showRating, setShowRating] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  const goBackToBrowse = () => {
    const browsePath = product && product.platform === 'Web' ? '/browse/web/apps' : '/browse/mobile/apps';
    navigate(browsePath);
  };

  const handleReviewAdded = () => {
    toast.success("Review Added")
  };

  window.scrollTo(0, 0);

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
              <div className="single-product">
                <div className="single-product-info">
                  <div className="mt-2 mb-3 brand-cat-web">
                    {product && product.productLogo && (
                      <div className="single-product-brand">
                        <img className="sp-img" src={product.productLogo.url} alt={product.brandName} />
                      </div>
                    )}
                    <div className="single-product-cat-web px-2">
                      <div>
                        <h3>{product && product.brandName}</h3>
                      </div>
                      {product && product.categories && product.categories.map((item, index) => {
                        return (
                          <span key={index}>
                            {(index ? ', ' : '') + item.name}
                          </span>
                        );
                      })}
                    </div>
                  </div> 
                  {product && product.numReviews > 0 && (
                    <div>
                      <p>{product.numReviews} {product.numReviews === 1 ? 'review' : 'reviews'}</p>
                    </div>
                  )}
                  <div className="rating">
                    <div>
                      <p>usability</p>
                      <Rating value={product.usability} />
                    </div>
                    <div>
                      <p>functionality</p>
                      <Rating value={product.functionality} />
                    </div>
                    <div>
                      <p>visualDesign</p>
                      <Rating value={product.visualDesign} />
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
                    <p className="mt-3">{product && product.description && product.description.about ? product.description.about : ""}</p>
                  </div>
                  <div className="website">
                  <h5 className="mt-3">website</h5>
                    <p>{product && product.description && product.description.website}</p>
                  </div>
                  <div className="location">
                    <h5 className="mt-3">Location</h5>
                    <p>{product && product.description && product.description.location ? product.description.location : ""}</p>
                  </div>
                  <div className="employees">
                    <h5 className="mt-3">Employees</h5>
                    <p>{product && product.description && product.description.employees ? product.description.employees : ""}</p>
                  </div>
                  <div className="funding">
                    <h5 className="mt-3">Funding</h5>
                    <p>{product && product.description && product.description.funding ? product.description.funding : ""}</p>
                  </div>
                  <div className="founded-date">
                    <h5 className="mt-3">Founded date</h5>
                    <p>{product && product.description && product.description.foundedDate ? product.description.foundedDate : ""}</p>
                  </div>
                  <div className="founders">
                    <h5 className="mt-3">Founders</h5>
                    {product && product.description && product.description.founders && product.description.founders.map((item, index) => (
                      <span key={index}>
                        {(index ? ', ' : '') + item}
                      </span>
                    ))}
                  </div>
                  <div className="contact-mail">
                    <h5 className="mt-3">contact</h5>
                    <p>{product && product.description && product.description.email ? product.description.email : ""}</p>
                  </div>
                </div>
                <div className="single-product-flows">
                  <div className="onboarding-rating-button">
                    <div className={`onboarding-button ${showOnboarding ? 'active' : ''}`} onClick={() => { setShowOnboarding(true); setShowRating(false); }}>
                      <p className="">Onboarding</p>
                    </div>
                    <div className={`rating-button ${showRating ? 'active' : ''}`} onClick={() => { setShowOnboarding(false); setShowRating(true); }}>
                      <p className="">Reviews</p>
                    </div>
                  </div>
                  {showOnboarding && (
                    <OnboardingComponent product={product} />
                  )}
                  {showRating && (
                    <RatingComponent product={product} id={id} onReviewAdded={handleReviewAdded}/>
                  )}
                </div>
              </div>
            </>
          )
        }
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default SingleProduct;
