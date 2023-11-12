import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSignin, setIsSignin] = useState(true)
  return (
    // <div>
    //   <div className="header">
    //     <div className="container-fluid">
    //       <div className="pc-header">
    //         <div className="row">
    //           <div className="col-lg-2">
    //             <Link className="navbar-brand d-flex align-items-center" to="/">
    //               <img className="p-1 m-0" alt="logo" src="/images/logo.png" />
    //               <div className="navbar-brand-text text-black">
    //                 <h5>product</h5>
    //                 <h5>geeks</h5>
    //               </div>
    //             </Link> 
    //           </div>
    //           <div className="navbar-search col-lg-3 d-flex align-items-center">
    //             <form className="input-group">
    //               <i class="fa fa-search" aria-hidden="true"></i>
    //               <input
    //                 type="search"
    //                 className="form-control rounded search"
    //                 placeholder="Search for anything"
    //               />
    //             </form>
    //           </div>
    //           <div className="col-md-5 d-flex align-items-center">
    //             <ul className="navbar-nav d-flex justify-content-center">
    //               <li className="nav-item">
    //                 <Link className="nav-link px-3 active" aria-current="page" to="/">Mobile Apps</Link>
    //               </li>
    //               <li className="nav-item">
    //                 <Link className="nav-link px-3" to="/">Web Apps</Link>
    //               </li>
    //               <li className="nav-item">
    //                 <Link className="nav-link px-3" to="/">Landing Pages</Link>
    //               </li>
    //               <li className="nav-item">
    //                 <Link className="nav-link px-3" to="/">Blog</Link>
    //               </li>
    //               <li className="nav-item">
    //                 <Link className="nav-link px-3" to="/">contact</Link>
    //               </li>
    //             </ul>
    //           </div>

    //           <div className="navbar-Login-Register col-lg-2 d-flex align-items-center justify-content-end">
    //             <Link className="px-2" to="/login">
    //               log in
    //             </Link>
    //             <Link className="px-2" to="/register">
    //               <button type="button" class="btn btn-theme-purple">sign up</button>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <Link className="navbar-brand d-flex align-items-center" to="/">
                <img className="p-1 m-0" alt="logo" src="/images/logo.png" />
                <div className="navbar-brand-text text-black">
                  <h5>product</h5>
                  <h5>geeks</h5>
                </div>
              </Link> 
            </div>
            <div className="col-lg-3 d-flex align-items-center">
              <form className="navbar-search input-group">
                <button>
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
                <input
                  type="search"
                  className="form-control rounded search"
                  placeholder="Search for anything"
                />
              </form>
            </div>
            <div className="col-md-5 d-flex align-items-center">
              <ul className="navbar-nav d-flex justify-content-center">
                <li className="nav-item">
                  <Link className="nav-link px-3 active" aria-current="page" to="/">Mobile Apps</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/">Web Apps</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/">Landing Pages</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/">contact</Link>
                </li>
              </ul>
            </div>

            {isSignin ? 
              <div className="navbar-Login-Register col-lg-2">
                <div className="round-cover-avatar-bar d-flex flex-gap align-items-center justify-content-center">
                  <div className="avatar-image">
                    <img className="px-1" src="/images/logo.png" alt="avatar" />
                  </div>
                  <div className="mx-2">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </div>
                </div>
                <ul class="dropdown-menu dropdown-menu-end">
                  
                </ul>
              </div>
              : 
              <div className="navbar-Login-Register col-lg-2 d-flex align-items-center justify-content-end">
                <Link className="px-2" to="/login">
                  log in
                </Link>
                <Link className="px-2" to="/register">
                  <button type="button" class="btn btn-theme-purple">sign up</button>
                </Link>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
