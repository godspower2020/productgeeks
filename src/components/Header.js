import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getGoogleUser, logout } from "../redux/actions/userActions";
import SearchResultsList from "./SearchResultsList";
import { listSearchedProduct } from "../redux/actions/ProductActions";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch()

  const activeLink = (path) => {
    return location.pathname.startsWith(path);
  };

  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin;

  const productSearchedList = useSelector((state) => state.productSearchedList);
  const { loading, products } = productSearchedList;

  useEffect(() => {
    if (!userInfo) {
      dispatch(getGoogleUser());
    }
  }, [dispatch, userInfo]);
  
  useEffect(() => {
    const closeDropdown = () => {
      setDropdownOpen(false);
    };
  
    const handleScroll = () => {
      if (dropdownOpen) {
        closeDropdown();
      }
    };
  
    if (dropdownOpen) {
      document.addEventListener("click", closeDropdown);
      window.addEventListener("scroll", handleScroll);
    }
  
    return () => {
      document.removeEventListener("click", closeDropdown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dropdownOpen]);
  

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const getInitials = (user) => {
    const propertyToUse = user.name; 
  
    if (propertyToUse) {
      const propertyArray = propertyToUse.split(' '); 
      return propertyArray.slice(0, 2).map(word => word[0]).join('').toUpperCase();
    }
  
    return '';
  };  

  const handleChange = async (value) => {
    setKeyword(value);
    if (value.trim() === "") {
      dispatch(listSearchedProduct(""));
    } else {
      dispatch(listSearchedProduct(value));
    }
  };  

  const handleClear = () => {
    setKeyword("");
    dispatch(listSearchedProduct(""));
  };

  const logoutHandler = () => {
    dispatch(logout());
  }

  return (
    <div className="header-container">
      <div className="header">
        <div className="container-header">
          <div className="brand order">
            <Link
              className="navbar-brand d-flex align-items-center m-0"
              to="/"
              onClick={() => window.location.href = "/browse/mobile/apps"}
            >
              <img className="m-0" alt="logo" src="/img/logo.png" />
              <div className="navbar-brand-text text-black">
                <h5>product</h5>
                <h5>geeks</h5>
              </div>
            </Link> 
          </div>

          <div className="search-bar d-flex align-items-center order">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input
                value={keyword}
                onChange={(e) => handleChange(e.target.value)}
                placeholder='search...'
                className="rounded search"
            />
            {keyword && (
              <i className="fas fa-times" aria-hidden="true" onClick={handleClear}></i>
            )}
          </div>
          {keyword && <SearchResultsList products={products} loading={loading} keyword={keyword} />}

          <div className="nav order">
            <ul className="navbar-nav">
              <li className={`nav-item ${activeLink("/browse/mobile/apps") && "active"}`}>
                <Link className="nav-link" to="/browse/mobile/apps">Mobile Apps</Link>
              </li>
              <li className={`nav-item ${activeLink("/browse/web/apps") && "active"}`}>
                <Link className="nav-link" to="/browse/web/apps">Web Pages</Link>
              </li>
              {/* <li className={`nav-item ${activeLink("/blog") && "active"}`}>
                <Link className="nav-link" to="/blog">Blog</Link>
              </li> */}
              <li className={`nav-item ${activeLink("/contact") && "active"}`}>
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="login order">
            {(userInfo) ? 
              <div className="round-cover-avatar" onClick={toggleDropdown}> 
                {userInfo && userInfo.profileImage ? (
                    <img src={userInfo.profileImage} alt="Profile" className="profile-image" /> 
                ) : (
                <div className="avatar d-flex justify-content-center align-items-center">
                  <p>{getInitials(userInfo)}</p>
                </div>
                )}
              </div>
              : 
              <div className="navbar-Login-register">
                <Link className="login-button" to="/login">
                  <div className="login-hover-show">
                    Log in
                  </div>
                </Link>
                <Link className="register-button" to="/register">
                  <button type="button" class="btn btn-theme-purple">sign up</button>
                </Link>
              </div> 
            }
          </div>  
        </div>
      </div>
      {dropdownOpen && (userInfo) && (
        <div className="dropdown-container"> 
          <div className="dropdown-arrow"></div>
          <div className="dropdown">
            {/* User info */}
            <div className="user-info">
              <p className="user-name">{userInfo.name}</p>
              <p className="user-email">{userInfo.email}</p>
            </div>
            <hr />
            {/* Profile link */}
            <ul>
              <Link to="/profile">
                <li>
                  <i className="fa fa-cog pr-2" aria-hidden="true"></i>
                  Profile
                </li>
              </Link>
            </ul>
            <hr />
            {/* Logout */}
            <div className="logout" to="#" onClick={logoutHandler}>
              <p>
                <i className="fa fa-sign-out" aria-hidden="true"></i>
                Logout
              </p>
            </div>
            <hr />
            {/* Dropdown links */}
            <div className="dropdown-links d-flex justify-content-between align-items-center">
              <Link className="" to="/privacy">
                Privacy
              </Link>
              <Link className="" to="/terms">
                Terms
              </Link>
              <Link className="" to="/copyright">
                Copyright
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;