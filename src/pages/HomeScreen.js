import React from "react";
import Header from "./../components/Header";
import Carousel from "./../components/homeComponents/Carousel";
import Screens from "./../components/homeComponents/Screens";
import Footer from "./../components/Footer";

const HomeScreen = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Carousel />
      <Screens />
      <Footer />
    </div>
  );
};

export default HomeScreen;
