import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from "moment";
import { FunctionalityForm, UsabilityForm, VisualDesignForm } from './RatingForm'
import Message from "../../../LoadingError/Error";
import { PRODUCT_CREATE_REVIEW_RESET } from '../../../../redux/constants/ProductConstants';
import Rating from '../../../Rating';
import { SpinnerLoading } from '../../../LoadingError/Loading';
import { createProductReview, editProductReview, listProductDetails } from '../../../../redux/actions/ProductActions';

const initialState = {
    usability: 0,
    functionality: 0,
    visualDesign: 0,
    comment: "",
};

const RatingComponent = ({product, id, onReviewAdded, onReviewEdited}) => {
    const [reviewData, setReviewData] = useState(initialState);
    const [reviewDataToEdit, setReviewDataToEdit] = useState(null);
    const [editMode, setEditMode] = useState(false);
    
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin); 
    const { userInfo } = userLogin; 

    const productReviewCreate = useSelector((state) => state.productReviewCreate); 
    const { loading: createReviewLoading, success: createReviewSuccess, error: createReviewError } = productReviewCreate; 

    const productReviewEdit = useSelector((state) => state.productReviewEdit); 
    const { loading: editReviewLoading, success: editReviewSuccess, error: editReviewError } = productReviewEdit;
    
    useEffect(() => {
        if (createReviewSuccess) {
            dispatch({type: PRODUCT_CREATE_REVIEW_RESET})
            setReviewData(initialState)
            onReviewAdded();
            dispatch(listProductDetails(id));
            setEditMode(false);
        }

        if (editReviewSuccess) {
            dispatch({type: PRODUCT_CREATE_REVIEW_RESET})
            setReviewData(initialState)
            onReviewEdited();
            dispatch(listProductDetails(id));
            setEditMode(false);
        }
    }, [createReviewSuccess, editReviewSuccess, dispatch, id, onReviewAdded, onReviewEdited]);           

    useEffect(() => {
        if (editMode && reviewDataToEdit) {
            const { usability, functionality, visualDesign, comment } = reviewDataToEdit;
            setReviewData({
                usability,
                functionality,
                visualDesign,
                comment,
            });
        } else if (!editMode) {
            setReviewData(initialState);
        }
    }, [editMode, reviewDataToEdit]);    

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
    
    const handleEditClick = (reviews) => {
        const userReview = reviews.find(review => review.user === userInfo._id);
        setReviewDataToEdit(userReview);
        setEditMode(true);
    };

    const submitHandler = (e) => {
        e.preventDefault();
    
        if (editMode) {
            dispatch(editProductReview(id, reviewDataToEdit._id, reviewData));
        } else {
            dispatch(createProductReview(id, reviewData));
        }
    };    

  return (
    <>
        <div className="row reviews">
            <div className="row my-6">
                <div className="col-lg-6">
                    <h6 className="mb-3">REVIEWS</h6>
                    {product && product.reviews && product.reviews.length === 0 && (
                        <div className='no-comment'>
                            <i className="far fa-comment-alt-slash"></i>
                            <p>no reviews</p>
                        </div>
                    )}
                    <div className='reviews-container'>
                    {product && product.reviews && product.reviews.map((review) => {
                        return (
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
                                            <p>functionality</p>
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
                        );
                    })}
                    </div>
                </div>
                <div className="col-lg-6 top-margin">
                    <h6>{userInfo && product.reviews && product.reviews.some(review => review.user === userInfo._id) ? 'EDIT YOUR REVIEW' : 'WRITE A CUSTOMER REVIEW'}</h6>
                    <div className="my-4">
                        {createReviewError && (
                            <Message variant="alert-danger">{createReviewError}</Message>
                        )}
                        {editReviewError && (
                            <Message variant="alert-danger">{editReviewError}</Message>
                        )}
                    </div>

                    { userInfo ? (                       
                       <form onSubmit={submitHandler}>
                            {userInfo && product.reviews && product.reviews.some(review => review.user === userInfo._id) && !editMode ? (
                                <div className="my-3">
                                    <div
                                        className="edit-review col-12 border-0 p-3 rounded text-white text-center"
                                        onClick={() => handleEditClick(product.reviews)}
                                    >
                                        Edit Review
                                    </div>
                                </div>
                            ) : (
                                <>
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
                                            disabled={createReviewLoading || editReviewLoading} 
                                            style={{ opacity: createReviewLoading || editReviewLoading ? '0.5' : '1' }} 
                                        >
                                            {createReviewLoading || editReviewLoading ? <SpinnerLoading /> : "Submit"}
                                        </button>
                                    </div>
                                </>
                            )}
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

