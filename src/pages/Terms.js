import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Terms = () => {
  return (
    <>
      <Header />
      <div className='container terms'>
        <div className='section'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <h2>Terms Of Use</h2>
              <div className='mb-4'>
                <h5 className='mb-2'>1. Acceptance Of Terms</h5>
                <p>By accessing or using the ProductGeeks platform (hereinafter referred to as "the Service"), you agree to be bound by these Terms of Use, including our Privacy Policy and all applicable laws and regulations. If you do not agree with these terms, please do not use the Service</p>
              </div>
              <div className='mb-4'>
                <h5 className='mb-2'>2. User Accounts</h5>
                <ul>
                  <li>You must register for an account to access certain features of the Service.</li>
                  <li>You are responsible for maintaining the confidentiality of your account and password.</li>
                  <li>You must provide accurate and up-to-date information during the registration process.</li>
                </ul>
              </div>
              <div className='mb-4'>
                <h5 className='mb-2'>3. User Content</h5>
                <ul>
                  <li>You are solely responsible for any content you post on the Service.</li>
                  <li>You must not post content that is illegal, infringing, or violates the rights of others.</li>
                  <li>We reserve the right to remove or modify any content that violates our policies.</li>
                </ul>
              </div>
              <div className='mb-4'>
                <h5 className='mb-2'>4.  Intellectual Property</h5>
                <ul>
                  <li>The Service, including all content, features, and functionality, is owned by ProductGeeks and is protected by copyright, trademark, and other laws.</li>
                  <li>You may not reproduce, distribute, modify, or create derivative works from any part of the Service.</li>
                </ul>
              </div>
              <div className='mb-4'>
                <h5 className='mb-2'>5.  Privacy</h5>
                <ul>
                  <li>Your use of the Service is also governed by our Privacy Policy.</li>
                </ul>
              </div>
              <div className='mb-4'>
                <h5 className='mb-2'>6.  Termination</h5>
                <ul>
                  <li>We reserve the right to terminate or suspend your account and access to the Service for violations of these terms or for any reason at our sole discretion.</li>
                </ul>
              </div>
              <div className='mb-4'>
                <h5 className='mb-2'>7.  Limitation of Liability</h5>
                <ul>
                  <li>The Service is provided on an "as is" and "as available" basis, and we make no warranties.</li>
                  <li>We are not liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of the Service.</li>
                </ul>
              </div>
              <div className='mb-4'>
                <h5 className='mb-2'>8.  Governing Law</h5>
                <ul>
                  <li>These Terms of Use are governed by and construed in accordance with the laws of Nigeria and the United Kingdom.</li>
                </ul>
              </div>
              <div className='mb-4'>
                <h5 className='mb-2'>9.  Changes to Terms</h5>
                <ul>
                  <li>We may modify or revise these Terms of Use at any time. Your continued use of the Service constitutes your acceptance of the revised terms.</li>
                </ul>
              </div>
              <div className='mb-4'>
                <h5 className='mb-2'>10.  Contact Information</h5>
                <p>If you have any questions about these Terms of Use, please contact us at support@product-geeks.com.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Terms