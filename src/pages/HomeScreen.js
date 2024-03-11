import React from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Prompt from "../components/AuthComponents/Prompt";
import Carousel from "../components/Carousel";
import Screens from "../components/homeComponents/Screens";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin;

  const homeScreenHeadingText = "Log in or sign up to continue browsing apps";

  const limited = {
    maxHeight: userInfo ? "none" : "1200px",
    marginTop: userInfo ? "100px" : "none",
    overflow: "hidden",
  };
  
  return (
    <div>
      <Header />
      {!userInfo && <Carousel />}
      <Screens style={limited} />
      {!userInfo && <Prompt headingText={homeScreenHeadingText} />}
      {/* <Footer /> */}
    </div>
  );
};

export default HomeScreen;
