import API from '../api/index';

import { EMAIL_CONFIRMATION_FAIL, EMAIL_CONFIRMATION_REQUEST, EMAIL_CONFIRMATION_SUCCESS, GOOGLE_USER_LOGIN_FAIL, GOOGLE_USER_LOGIN_REQUEST, GOOGLE_USER_LOGIN_SUCCESS, RESEND_OTP_FAIL, RESEND_OTP_REQUEST, RESEND_OTP_SUCCESS, RESET_EMAIL_FAIL, RESET_EMAIL_REQUEST, RESET_EMAIL_SUCCESS, RESET_PASSWORD_FAIL, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_RESET, USER_PROFILE_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS } from "../constants/UserConstants";

// USER LOGIN
export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })

        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }

        const {data} = await API.post(`/api/users/login`, {email, password}, config);

        dispatch({
            type: USER_LOGIN_SUCCESS, 
            payload: data,
        });

        localStorage.setItem("userInfo", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message,
        });
    }
}

// LOGOUT
export const logout = () => async(dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({
        type: USER_LOGOUT,
    });
    dispatch({
        type: USER_PROFILE_RESET,
    });

    window.location.reload(true);
}

// USER REGISTER
export const register = (name, email, password, confirmPassword) => async(dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        })

        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }

        const {data} = await API.post(`/api/users`, {name, email, password, confirmPassword}, config);

        dispatch({
            type: USER_REGISTER_SUCCESS, 
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message,
        });
    }
}

// GOOGLE LOGIN
export const googleLogin = () => async (dispatch) => {
  try {
    dispatch({ type: GOOGLE_USER_LOGIN_REQUEST });

    const response = await API.get("/auth/google/callback");
    const userData = await response.json();

    console.log("User data from Google:", userData);

    dispatch({ 
      type: GOOGLE_USER_LOGIN_SUCCESS 
    });

    dispatch({ 
      type: USER_LOGIN_SUCCESS, 
      payload: userData 
    });

    localStorage.setItem("userInfo", JSON.stringify(userData));
  } catch (error) {
    console.error('Error logging in with Google:', error);
    dispatch({ type: GOOGLE_USER_LOGIN_FAIL, payload: error.message });
  }
};


// CONFIRM EMAIL BY OTP
export const confirmEmail = (email, otp) => async (dispatch) => {
    try {
      dispatch({
        type: EMAIL_CONFIRMATION_REQUEST,
      });
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      const { data } = await API.post(`/api/email-verification/verify`, { email, otp }, config);
  
      const verifiedUserInfo = { ...data, verified: true };
  
      dispatch({
        type: EMAIL_CONFIRMATION_SUCCESS,
      });
  
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: verifiedUserInfo, 
      });
  
      localStorage.setItem("userInfo", JSON.stringify(verifiedUserInfo));
    } catch (error) {
      dispatch({
        type: EMAIL_CONFIRMATION_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
};
  
// USER PROFILE DETAILS
export const getUserProfileDetails = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: USER_PROFILE_REQUEST,
        });

        const { userLogin: { userInfo }, } = getState();
        const token = userInfo?.token; // Ensure userInfo and token are available

        if (!token) {
            throw new Error('User token is missing');
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            },
        };

        const { data } = await API.get(`/api/users/${id}`, config);

        dispatch({
            type: USER_PROFILE_SUCCESS, 
            payload: data,
        });

    } catch (error) {
        const message = error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message;

        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }

        dispatch({
            type: USER_PROFILE_FAIL,
            payload: message,
        });
    }
}

// USER UPDATE PROFILE
export const updateUserProfile = (user) => async(dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST,
        })

        const { userLogin: { userInfo },} = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            },
        }

        const {data} = await API.put(`/api/users/profile`, user, config);

        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS, 
            payload: data,
        });
        dispatch({
            type: USER_LOGIN_SUCCESS, 
            payload: data,
        });

        localStorage.setItem("userInfo", JSON.stringify(data));

    } catch (error) {
        const message = error.response && error.response.data.message 
        ? error.response.data.message 
        : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout())
        }
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: message,
                
        });
    }
}
  
export const resendOTP = (email) => async (dispatch) => {
    try {
      dispatch({ type: RESEND_OTP_REQUEST });
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      await API.post('/api/email-verification/resend-otp', { email }, config);
  
      dispatch({ type: RESEND_OTP_SUCCESS });
    } catch (error) {
      dispatch({
        type: RESEND_OTP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
};

export const sendPasswordResetMail = (email) => async (dispatch) => {
    try {
      dispatch({ type: RESET_EMAIL_REQUEST });
  
      const { data } = await API.post('/api/reset-password', { email });
  
      dispatch({
        type: RESET_EMAIL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: RESET_EMAIL_FAIL,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };

// CONFIRM RESET EMAIL BY OTP
export const resetPassword = (email, otp, newPassword) => async (dispatch) => {
    try {
      dispatch({ type: RESET_PASSWORD_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      await API.post('/api/reset-password/reset', { email, otp, newPassword }, config);
  
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };
