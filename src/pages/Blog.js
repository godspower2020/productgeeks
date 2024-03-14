import React from 'react'
import Header from "./../components/Header";
import Blogs from '../components/blogComponents/Blogs';
import CalltoActionSection from '../components/blogComponents/CalltoActionSection';

const Blog = () => {
  return (
    <>
        <Header />   
        <Blogs />
        <CalltoActionSection />
    </>
  )
}

export default Blog