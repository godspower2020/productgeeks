import { configureStore } from '@reduxjs/toolkit';
import { productDetailsReducer, productListReducer } from './reducers/ProductReducers';
import { userLoginReducer, userRegisterReducer, userProfileDetailsReducer, userUpdateProfileDetailsReducer, emailConfirmationReducer } from './reducers/UserReducer';

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
  },
  preloadedState: {
    userLogin: {
      userInfo: userInfoFromLocalStorage,
    }
  },
});

export default store;
