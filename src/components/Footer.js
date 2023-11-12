import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  const today= new Date()
  const year= today.getFullYear()

  return (
    <div className="footer p-3">
      <div className="row jcs-b">
        <div className="col-lg-4 d-flex align-items-center">
          <Link className="navbar-brand p-1 m-0" to="/">
            <img alt="logo" src="/images/logo.png" />
          </Link> 
          <div className="navbar-brand-text text-white">
            <h5>product</h5>
            <h5>geeks</h5>
          </div>
        </div>
        <div className="col-lg-4 d-flex align-items-center social-icons">
          <a className="m-2" href='https://www.instagram.com/godspower_augustine/' target='_blank' rel="noreferrer">
            <img alt="facebook" src="/images/facebook.png" />
          </a>
          <a className="m-2" href='https://twitter.com/AugustineGods15' target='_blank' rel="noreferrer">
            <img alt="twitter-x" src="/images/twitter-x.png" />
          </a>
          <a className="m-2" href='https://www.linkedin.com/in/augustine-godspower-523a2b1a4/' target='_blank' rel="noreferrer">
            <img alt="linkedin" src="/images/linkedin.png" />
          </a>
        </div>
        <div className="col-lg-4 d-flex align-items-center text-white">
          <p>ProductGeeks {year}. All Rights Reserved </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
