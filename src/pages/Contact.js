import React, { useState, useRef  } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import Toast from '../components/LoadingError/Toast';
import Header from "./../components/Header";
import Footer from '../components/Footer';
import { SpinnerLoading } from '../components/LoadingError/Loading';

const ToastObjects = {
  pauseOnFocusLoss : false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 3000,
}

const initialState = {name: '', email: '', subject: '', message: ''}

const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false)

  const toastId = useRef(null);

  const { name, email, subject, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    
    emailjs.sendForm('service_i40nevj', 'template_oefnmjt', e.target, '_qrR0cXB1aI8pF9JG')
      .then((result) => {
          setLoading(false)
          setFormData(initialState)
          if (!toast.isActive(toastId.current)) {
            toastId.current = toast.success("Message successfully submitted", ToastObjects);
          }

      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <>
        <Header />  
        <Toast />
        <div className='container contact'>
          <div className='section'>
            <div className='row  section-1 text-center'>
              <h1>Contact Us</h1>
              <p>Do you have any issue with any area of our operations? We are here for you.</p>
            </div>
          </div>
          <div className='section'>
            <div className='row'>
              <div className='col-lg-6 follow-social'>
                <h2 className='mb-4'>Follow Us On Social Media</h2>
                <p>Stay up to date with the latest news about productgeeks on our social media channels.</p>
                <div className="col-lg-4 social-icons">
                  <a className="" href='' target='_blank' rel="noreferrer">
                    <img alt="facebook" src="/img/facebook.png" />
                  </a>
                  <a className="" href='' target='_blank' rel="noreferrer">
                    <img alt="twitter-x" src="/img/twitter-x.png" />
                  </a>
                  <a className="" href='' target='_blank' rel="noreferrer">
                    <img alt="linkedin" src="/img/linkedin.png" />
                  </a>
                </div>
              </div>
              <div className='col-lg-6 form'>
                <h2 className='my-5'>Send Us A Message</h2>
                <form className="email-form" onSubmit={handleSubmit}>
                  <div className="form-group ">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required value={name} onChange={handleChange} />
                  </div>
                  <div className="form-group mt-4">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required value={email} onChange={handleChange} />
                  </div>
                  <div className="form-group mt-4">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required value={subject} onChange={handleChange} />
                  </div>
                  <div className="form-group mt-4">
                    <textarea className="form-control" name="message" rows={5} placeholder="Message" required value={message} onChange={handleChange} />
                  </div>
                  <div className="text-center button">
                    <button type="submit">
                    {loading ? 
                      <div className='straight-button'>
                        <SpinnerLoading  /> 
                      </div> :
                      <>
                        Send message 
                      </>               
                      }
                    </button>
                  </div>
                </form> 
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Contact