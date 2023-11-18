import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section">
      <div className="subscribe-head">
        <div className="head-text">
          <h2>Stay in the Know</h2>
          <p>Subscribe for the latest updates, insightful articles, and exclusive content delivered directly to your inbox</p>
        </div>
        <form className="form-section d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input type="email" className="form-control bg-light border-0 small" placeholder="Your Email..." aria-label="Search" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="" type="button">
                Yes. I want!
              </button>
            </div>
          </div>
        </form>

        {/* <form className="form-section">
          <input placeholder="Your Email..." name="email" type="email" />
          <button type="button">Yes. I want!</button>
        </form> */}
      </div>
    </div>
  );
};

export default CalltoActionSection;
