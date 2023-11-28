import React from 'react'
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { useParams  } from "react-router-dom";
import blogs from "../data/Blogs";

const SingleBlog = () => {
  const { id } = useParams();

  const blog = blogs.find((p) => String(p._id) === id);

  return (
     <>
        <Header />
        <div className="container">
            <div className="row single-blog text-black">
              <div className='col-lg-12'>
                <div className="single-blog-title">
                  <h4 className="blog-title">{blog.title}</h4>
                  <p className='mt-1'>{blog.read} min read</p>
                </div>
                <img className="" alt={blog.title} src={blog.innerImage} />
                <p className="blog-excerpt">{blog.excerpt}</p>
              </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default SingleBlog