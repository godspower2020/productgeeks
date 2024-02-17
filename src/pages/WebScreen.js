import React from "react";
import Header from "./../components/Header";
import Carousel from "../components/Carousel";
import Footer from "./../components/Footer";
import Prompt from "../components/AuthComponents/Prompt";
import Screens from "../components/homeComponents/Screens";
import { useSelector } from "react-redux";
import Interests from "../components/homeComponents/Interests";

const WebScreen = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin;

  const webScreenHeadingText = "Log in or sign up to continue browsing apps";
  
  return (
    <div>
      <Header />
      {!userInfo && <Carousel />}
      {userInfo && <Interests />}
      <Screens />
      {!userInfo && <Prompt headingText={webScreenHeadingText} />}
      <Footer />
    </div>
  );
};

export default WebScreen;
