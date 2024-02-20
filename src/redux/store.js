import { configureStore } from '@reduxjs/toolkit';
import { productDetailsReducer, productListReducer } from './reducers/ProductReducers';
import { userLoginReducer, userRegisterReducer, userProfileDetailsReducer, userUpdateProfileDetailsReducer, emailConfirmationReducer, resendEmailConfirmationReducer, passwordResetMailReducer, passwordResetReducer, googleUserLoginReducer } from './reducers/UserReducer';

// USER LOGIN
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userProfileDetails : userProfileDetailsReducer,
    userUpdateProfileDetails : userUpdateProfileDetailsReducer,
    userEmailConfirmation: emailConfirmationReducer,
    userResendEmailConfirmation: resendEmailConfirmationReducer,
    userRequestResetPasswordMail: passwordResetMailReducer,
    passwordReset: passwordResetReducer,
    googleUserLogin: googleUserLoginReducer,
  },
  preloadedState: {
    userLogin: {
      userInfo: userInfoFromLocalStorage,
    }
  },
});

export default store;
