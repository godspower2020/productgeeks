import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import Header from "./../components/Header";
import Carousel from "../components/Carousel";
import Screens from "../components/homeComponents/Screens";
import GoogleAnalytics from "../utils/GoogleAnalytics"; 

const HomeScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  
  return (
    <div>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-X68KRGZPLC"></script>
        <GoogleAnalytics /> 
        <title>myproductgeeks | Welcome</title>
        <meta name="description" content="Explore the world of user experiences at Product Geeks. Get inspired by top-rated designers & agencies worldwide. Discover, optimize, and share innovative mobile and web screens." />
      </Helmet>
      <Header />
      {!userInfo && <Carousel />}
      <Screens />
    </div>
  );
};

export default HomeScreen;
