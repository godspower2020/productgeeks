import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Toast from '../components/LoadingError/Toast';
import Message from "../components/LoadingError/Error";
import { getUserProfileDetails, updateUserProfile } from "../redux/actions/userActions";
import { SpinnerLoading } from "../components/LoadingError/Loading";
import PasswordValidation from "../components/AuthComponents/PasswordValidation";

const ToastObjects = {
  pauseOnFocusLoss : false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 3000,
}

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [nameChanged, setNameChanged] = useState(false); 
  const [emailChanged, setEmailChanged] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);
  const [validationResults, setValidationResults] = useState({
    minLength: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });
  const [changePassword, setChangePassword] = useState(false);

  const toastId = React.useRef(null);

  const dispatch = useDispatch()

  const userProfileDetails = useSelector((state) => state.userProfileDetails)
  const {error, loading, user} = userProfileDetails;

  const userUpdateProfileDetails = useSelector((state) => state.userUpdateProfileDetails)
  const {loading: updateLoading, success: updateSuccess, error: updateError} = userUpdateProfileDetails;

  useEffect(() => {
    if (user) {
      setName(user.name)
      setEmail(user.email)
    }
  }, [dispatch, user])

  useEffect(() => {
    dispatch(getUserProfileDetails("profile"))
  }, [dispatch])

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;

    const hasMinLength = newPassword.length >= 8;
    const hasUppercase = /[A-Z]/.test(newPassword);
    const hasLowercase = /[a-z]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);
    const hasSpecialChar = /[!@#$%^_&*(),.?":{}|<>]/.test(newPassword);

    setValidationResults({
      minLength: hasMinLength,
      uppercase: hasUppercase,
      lowercase: hasLowercase,
      number: hasNumber,
      specialChar: hasSpecialChar,
    });

    const isValidationPassed = Object.values(validationResults).every(result => result);
    setIsFormValid(isValidationPassed);

    setPassword(newPassword);
    
    setNameChanged(true);
    setEmailChanged(true);
  };

  useEffect(() => {
    const isValidationPassed = Object.values(validationResults).every(result => result);
    setIsFormValid(isValidationPassed);
  }, [validationResults]);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  const handleNameChange = (e) => {
    const newName = e.target.value;
  
    const capitalizedName = newName
      .split(" ")
      .map((word) => capitalizeFirstLetter(word))
      .join(" ");
  
    setName(capitalizedName);
    setNameChanged(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailChanged(true); 
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (changePassword && password !== confirmPassword) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Password does not match", ToastObjects);
      }
    } else {
      const updatedUser = {
        id: user._id,
        name,
        email,
        password: changePassword ? password : undefined,
      };
  
      dispatch(updateUserProfile(updatedUser))
      .then(() => {
        if (changePassword) {
          setPassword("");
          setConfirmPassword("");
        }
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.success("Profile updated successfully", ToastObjects);
        }
      })
    }
  };    

  return (
    <>
      <Header />
      <Toast />
        {error && <Message variant="alert-danger">{error}</Message>}
        {updateError && <Message variant="alert-danger">{updateError}</Message>}
      <div className="container profile-account-settings">
        <div className="row align-items-start">
          <div className="sub-text">
            <h2 className="my-2">Account settings</h2>
            <p className="py-3">Manage your Productgeeks profile</p>
          </div>
          {loading ? "" : (
            <>
              <div className="profile-avatar">
                <p className="py-3">Profile Avatar</p>
                <div className="round-cover-avatar">
                  <h1>AG</h1>
                </div>
              </div>
              <form className="form-container" onSubmit={submitHandler}>
                <div className="col-lg-12">
                  <div className="form">
                    <label for="account-fn">Full name</label>
                    <input 
                      className="form-control" 
                      type="text" 
                      required 
                      value={name} 
                      onChange={handleNameChange} 
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form">
                    <label for="account-email">Email</label>
                    <input 
                      className="form-control" 
                      type="email" 
                      required
                      value={email} 
                      onChange={handleEmailChange}  
                    />
                  </div>
                </div>
                {changePassword && (
                  <>
                    <div className="col-lg-12">
                      <div className="form">
                        <label htmlFor="account-pass">New Password</label>
                        {passwordFocused && <PasswordValidation validationResults={validationResults} focused={passwordFocused} />}
                        <div className="password-input-container">
                          <input
                            className="form-control"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            required
                            value={password}
                            onChange={handlePasswordChange}
                            onFocus={handlePasswordFocus}
                          />
                          {password && (
                            <i
                              className={`password-toggle ${showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'}`}
                              aria-hidden="true"
                              onClick={handleShowPassword}
                            ></i>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="confirmpassword-input-container form">
                        <label htmlFor="account-confirm-pass">Confirm new password</label>
                        <input
                          className="form-control"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Confirm Password"
                          required
                          value={confirmPassword}
                          onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            setPasswordMatch(password === e.target.value);
                          }}
                        />
                        {!passwordMatch && (
                          <span className="error-message">Passwords do not match</span>
                        )}
                      </div>
                    </div>
                  </>
                )}
                <button
                  className="update-button"
                  type="submit"
                  disabled={!(nameChanged || emailChanged) || (changePassword && !isFormValid) || updateLoading}
                  style={{ opacity: (!(nameChanged || emailChanged) || (changePassword && !isFormValid) || updateLoading) ? '0.5' : '1' }} 
                >
                  {updateLoading ? <SpinnerLoading /> : "Update"}
                </button>
                <br />
                <button 
                  className="change-password-button"
                  type="button" 
                  onClick={() => setChangePassword(!changePassword)}
                >
                  {changePassword ? 'Cancel Change Password' : 'Change Password'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;
