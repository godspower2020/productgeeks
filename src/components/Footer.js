import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  const today= new Date()
  const year= today.getFullYear()

  return (
    <div className="footer">
      <div className="row">
        <Link 
          className="col-lg-4 d-flex align-items-center footer-logo" 
          to="/"
            onClick={() => window.location.href = "/browse/mobile/apps"}
        >
          <div className="navbar-brand m-0">
            <img alt="logo" src="/img/logo.png" />
          </div> 
          <div className="px-1 navbar-brand-text text-white">
            <h5>product</h5>
            <h5>geeks</h5>
          </div>
        </Link>
        <div className="col-lg-4 social-icons">
          <a className="" href='' target='_blank' rel="noreferrer">
            <img alt="facebook" src="/img/facebook.png" />
          </a>
          <a className="" href='' target='_blank' rel="noreferrer">
            <img alt="twitter-x" src="/img/twitter-x.png" />
          </a>
          <a className="" href='' target='_blank' rel="noreferrer">
            <img alt="linkedin" src="/img/linkedin.png" />
          </a>
        </div>
        <div className="col-lg-4 year text-white">
          <p>ProductGeeks {year}. All Rights Reserved </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
