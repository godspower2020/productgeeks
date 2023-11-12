import React from "react";
import Header from "./../components/Header";
import Carousel from "./../components/homeComponents/Carousel";
import Screens from "./../components/homeComponents/Screens";
// import ContactInfo from "./../components/homeComponents/ContactInfo";
// import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";

const HomeScreen = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Carousel />
      <Screens />
      {/* <CalltoActionSection />
      <ContactInfo /> */}
      <Footer />
    </div>
  );
};

export default HomeScreen;
