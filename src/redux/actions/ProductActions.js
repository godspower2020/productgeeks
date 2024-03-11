import API from '../api/index';

import { PRODUCT_CREATE_REVIEW_FAIL, PRODUCT_CREATE_REVIEW_REQUEST, PRODUCT_CREATE_REVIEW_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_EDIT_REVIEW_FAIL, PRODUCT_EDIT_REVIEW_REQUEST, PRODUCT_EDIT_REVIEW_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/ProductConstants"
import { logout } from './userActions';

// ALL PRODUCT LIST
export const listProduct = () => async(dispatch) => {
    try {
        dispatch({
            type: PRODUCT_LIST_REQUEST,
        })

        const {data} = await API.get("/api/products");

        dispatch({
            type: PRODUCT_LIST_SUCCESS, 
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message,
        });
    }
}

// SINGLE PRODUCT DETAILS
export const listProductDetails = (id) => async(dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST,
        })

        const {data} = await API.get(`/api/products/${id}`);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS, 
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message,
        });
    }
}

// SINGLE PRODUCT REVIEW ACTION CREATE
export const createProductReview = (id, reviewData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REVIEW_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await API.post(`/api/products/${id}/review`, reviewData, config);

        dispatch({
            type: PRODUCT_CREATE_REVIEW_SUCCESS,
        });
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;

        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }

        dispatch({
            type: PRODUCT_CREATE_REVIEW_FAIL,
            payload: message,
        });
    }
};

// SINGLE PRODUCT REVIEW ACTION EDIT
export const editProductReview = (id, reviewData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_EDIT_REVIEW_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await API.post(`/api/products/${id}/review/edit`, reviewData, config);

        dispatch({
            type: PRODUCT_EDIT_REVIEW_SUCCESS,
        });
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;

        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }

        dispatch({
            type: PRODUCT_EDIT_REVIEW_FAIL,
            payload: message,
        });
    }
};
