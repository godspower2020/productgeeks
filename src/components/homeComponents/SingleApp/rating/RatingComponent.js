import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from "moment";
import { FunctionalityForm, UsabilityForm, VisualDesignForm } from './RatingForm'
import Message from "../../../LoadingError/Error";
import { PRODUCT_CREATE_REVIEW_RESET } from '../../../../redux/constants/ProductConstants';
import Rating from '../../../Rating';
import { SpinnerLoading } from '../../../LoadingError/Loading';
import { createProductReview, listProductDetails } from '../../../../redux/actions/ProductActions';

const initialState = {
    usability: 0,
    functionality: 0,
    visualDesign: 0,
    comment: "",
};

const RatingComponent = ({product, id, onReviewAdded}) => {
    const [reviewData, setReviewData] = useState(initialState);
    
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin); 
    const { userInfo } = userLogin; 

    const productReviewCreate = useSelector((state) => state.productReviewCreate); 
    const { loading: createReviewLoading, success: createReviewSuccess, error: createReviewError } = productReviewCreate; 
  
    useEffect(() => {
      if (createReviewSuccess) {
          dispatch({type: PRODUCT_CREATE_REVIEW_RESET})
          setReviewData(initialState)
          onReviewAdded()
          dispatch(listProductDetails(id));
      }
    }, [createReviewSuccess, dispatch, id, onReviewAdded]);

    const handleCommentChange = (e) => {
        const { name, value } = e.target;
        setReviewData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRatingChange = (field, value) => {
        setReviewData((prevData) => ({
          ...prevData,
          [field]: Number(value),
        }));
    };    

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(createProductReview(id, reviewData))
    }

  return (
    <>
        <div className="row reviews">
            <div className="row my-6">
                <div className="col-lg-6">
                    <h6 className="mb-3">REVIEWS</h6>
                    {product.reviews.length === 0 && (
                        <div className='no-comment'>
                            <i className="far fa-comment-alt-slash"></i>
                            <p>no reiews</p>
                        </div>
                    )}

                    <div className='reviews-container'>
                        {product.reviews.map((review) => (
                            <div key={review._id} className='review'>
                                <p className='user-name'>{review.name}</p>
                                <div className="alert comment mt-1">
                                    <div className='individual-ratings rating'>
                                        <div className='scores'>
                                            <p>usability</p>
                                            <div>
                                                <Rating value={review.usability} />
                                            </div>
                                        </div>
                                        <div className='scores'>
                                            <p>functionaity</p>
                                            <div>
                                                <Rating value={review.functionality} />
                                            </div>
                                        </div>
                                        <div className='scores'>
                                            <p>visual design</p>
                                            <div>
                                                <Rating value={review.visualDesign} />
                                            </div>
                                        </div>
                                    </div>
                                    <p>{review.comment}</p>
                                    <span className=''>{moment.utc(review.createdAt).calendar()}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-6 top-margin">
                    <h6>WRITE A CUSTOMER REVIEW</h6>
                    <div className="my-4">
                        {createReviewError && (
                            <Message variant="alert-danger">{createReviewError}</Message>
                        )}
                    </div>

                    { userInfo ? (
                        <form onSubmit={submitHandler}>
                            <div className="col-lg-12">
                                <div className="single-page-ratings">
                                    <div className="usability">
                                        <p>Usability</p>
                                        <UsabilityForm usability={reviewData.usability} onRatingChange={handleRatingChange} />
                                    </div>
                                    <div className="functionality">
                                        <p>Functionality</p>
                                        <FunctionalityForm functionality={reviewData.functionality} onRatingChange={handleRatingChange} />
                                    </div>
                                    <div className="visualDesign">
                                        <p>visualDesign</p>
                                        <VisualDesignForm visualDesign={reviewData.visualDesign} onRatingChange={handleRatingChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="my-4">
                                <strong>Comment</strong>
                                <textarea
                                    row="3"
                                    name="comment"
                                    value={reviewData.comment}
                                    onChange={handleCommentChange}
                                    className="col-12 bg-light p-3 mt-2 border-0 rounded"
                                    placeholder='Add a comment...'
                                    required
                                ></textarea>
                            </div>
                            <div className="my-3">
                                <button 
                                    className="col-12 bg-black border-0 p-3 rounded text-white"
                                    disabled={ createReviewLoading}
                                    style={{ opacity: createReviewLoading ? '0.5' : '1' }}
                                >
                                {createReviewLoading ? <SpinnerLoading /> : "SUBMIT"}
                                </button>
                            </div>
                        </form>
                        ) : (
                            <div className="my-3">
                                <Message variant={"alert-warning no-user"}>
                                    Please{" "}
                                    <Link to="/login">
                                    " <strong>Login</strong> "
                                    </Link>{" "}
                                    to write a review{" "}
                                </Message>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default RatingComponent