import React from 'react'
import { Link  } from "react-router-dom";
import blogs from "../../data/Blogs";

const Blogs = () => {
  return (
    <>
        <div className="container">
            <div className="row blog-header text-black">
                <h2 className='py-3'>Unlocking Digital Experiences</h2>
                <p>Explore User Flows, Get Inspired, and Contribute to the Future of Digital Products.</p>
            </div>
            <div className="row blog-posts">
                {blogs.map((blog) => (
                    <div className='blog col-lg-4 col-md-6'>
                        <Link className="blog-flex" to={`/blog/${blog._id}`}>
                            <img className="" alt={blog.title} src={blog.heroImage} />
                            <div className='blog-text'>
                                <h4 className="blog-title">{blog.title}</h4>
                                <p className="blog-excerpt">{blog.excerpt}</p>
                            </div>
                        </Link>
                        <button>Read more</button>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Blogs