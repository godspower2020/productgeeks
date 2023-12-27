import React, { useEffect } from "react";
import { useParams, useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Rating from "../components/Rating";
import { listProductDetails } from "../redux/actions/ProductActions";
import Message from "../components/LoadingError/Error";
import { GrowLoading } from "../components/LoadingError/Loading";
import RatingForm from "../components/homeComponents/SingleApp/RatingForm";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);
  
  const goBackToBrowse = () => {
    const browsePath = product.platform === 'Web' ? '/browse/web/apps' : '/browse/mobile/apps';
    navigate(browsePath);
  };

  window.scrollTo(0, 0);

  return ( 
    <>
      <Header />
      <div className="container-single-product">
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
              <div className="back my-2" onClick={goBackToBrowse}>
                <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
              </div>
              <div className="single-product">
                <div className="single-product-info">
                  <div className="mt-2 mb-3 brand-cat-web">
                    <div className="single-product-brand">
                      <img className="sp-img" src={product.productLogo.url} alt={product.brandName} />
                    </div>
                    <div className="single-product-cat-web px-2">
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
                      <Rating value={product.description.usability} />
                    </div>
                    <div>
                      <p>functionality</p>
                      <Rating value={product.description.functionality} />
                    </div>
                    <div>
                      <p>visualDesign</p>
                      <Rating value={product.description.visualDesign} />
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
                  <div className="screen-video-version-button">
                    <div className="screen-video-button">
                      <div className="screen-button">
                        <p>screens</p>
                      </div>
                      <div className="video-button">
                        <p>Video Process Flow</p>
                      </div>
                    </div>
                    <div className="version">
                      <p className="version-text">version</p>
                      <div className="d-inline-block">
                        <div className="version-button">
                          <p>Aug 2023 (Latest)</p>
                          <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="mt-3">Onboarding</p>
                    <div className="product-flows">
                      <div className="flow">
                        {product.screensFlow.map((item) => (
                          <img className={`${product.platform === 'Mobile' ? 'img-mobile' : 'img-web'}`} src={item} alt={product.brandName} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <h4 className="mb-4">Leave a Review</h4>
                  <div className="ratings">
                    <div className="usability">
                      <p>Usability</p>
                      <RatingForm />
                    </div>
                    <div className="functionality">
                      <p>Functionality</p>
                      <RatingForm />
                    </div>
                    <div className="visualDesign">
                      <p>visualDesign</p>
                      <RatingForm />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        }
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
