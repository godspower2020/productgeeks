import React from 'react'
import Header from '../components/Header'

const About = () => {
  return (
    <>
      <Header />
      <div className='container about'>
        <div className='section'>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <h1>We are on a mission to inspire & empower the world to design better digital experiences.</h1>
              <p>At productgeeks, we believe that simplifying access to great design ideas and solutions will make the design process easier, faster and more effective for digital product designers.</p>
              <p>That's why we are building a comprehensive, expert-curated library of interfaces from the best-in-class digital products that helps product designers find relevant design inspiration and references with significantly less time and effort.</p>
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <h2>Over trillions pixels showcased. What are you working on?</h2>
              <p>Hundreds of millions of people look for design inspiration and feedback on design communities. We help players like you share small screenshots (shots) to show off your current projects, boost your portfolio, and love what you do—no matter what kind of creative professional you are.</p>
              <p>Founded in 2023, we are a bootstrapped and profitable company helping design talent share, grow, and get hired by over tens of thousands of today’s most innovative brands around the world.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About