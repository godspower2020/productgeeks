import { EMAIL_CONFIRMATION_FAIL, EMAIL_CONFIRMATION_REQUEST, EMAIL_CONFIRMATION_SUCCESS, GOOGLE_USER_SIGNIN_FAIL, GOOGLE_USER_SIGNIN_REQUEST, GOOGLE_USER_SIGNIN_SUCCESS, RESEND_OTP_FAIL, RESEND_OTP_REQUEST, RESEND_OTP_SUCCESS, RESET_EMAIL_FAIL, RESET_EMAIL_REQUEST, RESET_EMAIL_SUCCESS, RESET_PASSWORD_FAIL, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_RESET, USER_PROFILE_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST,  USER_UPDATE_PROFILE_SUCCESS } from "../constants/UserConstants";

// LOGIN
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

// REGISTER
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }
        case USER_REGISTER_SUCCESS:
            return { loading: false, success: true, userInfo: action.payload }
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
};

// USER PROFILE
export const userProfileDetailsReducer = (state = {user: {} }, action) => {
    switch (action.type) {
        case USER_PROFILE_REQUEST:
            return { ...state, loading: true }
        case USER_PROFILE_SUCCESS:
            return { loading: false, user: action.payload }
        case USER_PROFILE_FAIL:
            return { loading: false, error: action.payload }
        case USER_PROFILE_RESET:
            return { user : {} }
        default:
            return state;
    }
};

// USER UPDATE PROFILE
export const userUpdateProfileDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return { loading: true }
        case USER_UPDATE_PROFILE_SUCCESS:
            return { loading: false, success: true, userInfo: action.payload }
        case USER_UPDATE_PROFILE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
};

// USER CONFIRM EMAIL
export const emailConfirmationReducer = (state = {}, action) => {
  switch (action.type) {
    case EMAIL_CONFIRMATION_REQUEST:
      return { loading: true };
    case EMAIL_CONFIRMATION_SUCCESS:
      return { loading: false, success: true };
    case EMAIL_CONFIRMATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// GOOGLE USER SIGN IN
export const googleUserSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case GOOGLE_USER_SIGNIN_REQUEST:
      return { loading: true }
    case GOOGLE_USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case GOOGLE_USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

// USER RESEND EMAIL
export const resendEmailConfirmationReducer = (state = {}, action) => {
    switch (action.type) {
      case RESEND_OTP_REQUEST:
        return { loading: true };
      case RESEND_OTP_SUCCESS:
        return { loading: false, success: true };
      case RESEND_OTP_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

// USER REQUEST NEW PASSWORD EMAIL
export const passwordResetMailReducer = (state = {}, action) => {
    switch (action.type) {
      case RESET_EMAIL_REQUEST:
        return { loading: true };
      case RESET_EMAIL_SUCCESS:
        return { loading: false, success: true };
      case RESET_EMAIL_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

// USER NEW PASSWORD
export const passwordResetReducer = (state = {}, action) => {
    switch (action.type) {
      case RESET_PASSWORD_REQUEST:
        return { loading: true };
      case RESET_PASSWORD_SUCCESS:
        return { loading: false, success: true };
      case RESET_PASSWORD_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };