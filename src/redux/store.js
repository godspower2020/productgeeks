import { configureStore } from '@reduxjs/toolkit';
import { productCreateReviewReducer, productDetailsReducer, productEditReviewReducer, productListReducer } from './reducers/ProductReducers';
import { userLoginReducer, userRegisterReducer, userProfileDetailsReducer, userUpdateProfileDetailsReducer, emailConfirmationReducer, resendEmailConfirmationReducer, passwordResetMailReducer, passwordResetReducer, googleUserSigninReducer } from './reducers/UserReducer';

// USER LOGIN
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productReviewCreate: productCreateReviewReducer,
    productReviewEdit: productEditReviewReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    googleUserSignin: googleUserSigninReducer,
    userProfileDetails : userProfileDetailsReducer,
    userUpdateProfileDetails : userUpdateProfileDetailsReducer,
    userEmailConfirmation: emailConfirmationReducer,
    userResendEmailConfirmation: resendEmailConfirmationReducer,
    userRequestResetPasswordMail: passwordResetMailReducer,
    passwordReset: passwordResetReducer,
  },
  preloadedState: {
    userLogin: {
      userInfo: userInfoFromLocalStorage,
    }
  },
});

export default store;
