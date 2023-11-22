import React, { useState } from "react";
import Header from "./../components/Header";
import Carousel from "./../components/homeComponents/Carousel";
import Screens from "./../components/homeComponents/Screens";
import Footer from "./../components/Footer";
import Prompt from "../components/AuthComponents/Prompt";

const HomeScreen = () => {
  const [isSignin, setIsSignin] = useState(false)

  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Carousel />
      <Screens />
      {/* {isSignin ? <Prompt /> : ""} */}
      <Prompt />
      <Footer />
    </div>
  );
};

export default HomeScreen;
