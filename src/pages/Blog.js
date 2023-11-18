import React from 'react'
import Header from "./../components/Header";
import Footer from '../components/Footer';
import Blogs from '../components/blogComponents/Blogs';
import CalltoActionSection from '../components/homeComponents/CalltoActionSection';

const Blog = () => {
  return (
    <>
        <Header />   
        <Blogs />
        <CalltoActionSection />
        <Footer />
    </>
  )
}

export default Blog