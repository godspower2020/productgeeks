import React from 'react'
import Header from '../components/Header'
import Carousel from "../components/Carousel";
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import Prompt from '../components/AuthComponents/Prompt'
import Landing from '../components/LandingComponents/Landing';

const LandingPage = () => {
    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin;

    const landingPageHeadingText = "Log in or sign up to get a personalized view of your pages";

  return (
    <div>
        <Header />
        {!userInfo && <Carousel />}
        {!userInfo && <Prompt headingText={landingPageHeadingText} />}
        {userInfo && <Landing />}
        <Footer />
    </div>
  )
}

export default LandingPage