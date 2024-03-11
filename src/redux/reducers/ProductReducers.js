import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_CREATE_REVIEW_REQUEST, PRODUCT_CREATE_REVIEW_SUCCESS, PRODUCT_CREATE_REVIEW_FAIL, PRODUCT_CREATE_REVIEW_RESET, PRODUCT_EDIT_REVIEW_REQUEST, PRODUCT_EDIT_REVIEW_SUCCESS, PRODUCT_EDIT_REVIEW_FAIL } from '../constants/ProductConstants';

// ALL PRODUCT LIST
export const productListReducer = (state = { products:[]}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [], error: null };
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
};

// SINGLE PRODUCT DETAILS
export const productDetailsReducer = (state = { product: {reviews:[]}}, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true, error: null };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
};

// SINGLE PRODUCT CREATE REVIEWS
export const productCreateReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REVIEW_REQUEST:
            return { ...state, loading: true, error: null };
        case PRODUCT_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true }
        case PRODUCT_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_CREATE_REVIEW_RESET:
            return {}
        default:
            return state;
    }
};

// SINGLE PRODUCT EDIT REVIEWS
export const productEditReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_EDIT_REVIEW_REQUEST:
            return { ...state, loading: true, error: null };
        case PRODUCT_EDIT_REVIEW_SUCCESS:
            return { loading: false, success: true }
        case PRODUCT_EDIT_REVIEW_FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_CREATE_REVIEW_RESET:
            return {}
        default:
            return state;
    }
};