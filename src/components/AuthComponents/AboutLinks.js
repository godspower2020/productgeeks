import React from 'react'
import { Link } from "react-router-dom";

const AboutLinks = () => {
  return (
    <div className='d-flex justify-content-center align-items-center gap-15'>
        <Link className="px-3" to="/about">
          About
        </Link>
        <Link className="px-3" to="/privacy">
        Privacy
        </Link>
        <Link className="px-3" to="/terms">
        Terms of use
        </Link>
        <Link className="px-3" to="/faqs">
        FAQ
        </Link>
    </div>
  )
}

export default AboutLinks