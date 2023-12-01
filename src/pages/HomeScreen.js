import React, { useEffect } from "react";
import Header from "./../components/Header";
import Carousel from "../components/Carousel";
import Footer from "./../components/Footer";
import Prompt from "../components/AuthComponents/Prompt";
import Screens from "../components/Screens";


const HomeScreen = () => {

  useEffect(() => {
    window.location.pathname === '/' && (window.location.href = '/browse/mobile/apps');
  }, []);
  
  return (
    <div>
      <Header />
      <Carousel />
      <Screens />
      <Prompt />
      <Footer />
    </div>
  );
};

export default HomeScreen;
