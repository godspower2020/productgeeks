import React from 'react'
import Header from '../components/Header'

const Privacy = () => {
  return (
    <>
      <Header />
      <div className='container privacy'>
        <div className='section'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <h2>Privacy Policy</h2>
              <div className='mb-4'>
                <h5 className='mb-2'>1. Introduction</h5>
                <p>This Privacy Policy explains how ProductGeeks ("we," "our," or "us") collects, uses, shares, and protects your personal information. By using our services, you consent to the practices described in this policy.</p>
              </div>
              <div className='mb-4'>
                <h5 className='mb-2'>2. Information We Collect</h5>
                <ul>
                  <li>User-Provided Information: We may collect information that you provide directly when registering for an account, posting content, or contacting us.</li>
                  <li>Automatically Collected Information: We may collect information automatically through your use of our services, including your IP address, device type, browser type, and usage data.</li>
                </ul>
              </div>
              <div className='mb-4'>
                <h5 className='mb-2'>3. How We Use Your Information</h5>
                <p>We may use your information for the following purposes:</p>
                <ul>
                  <li>To provide, maintain, and improve our services.</li>
                  <li>To communicate with you, including responding to your inquiries and providing updates.</li>
                  <li>To personalize and enhance your experience.</li>
                  <li>To monitor usage and analyze trends.</li>
                  <li>To protect the security and integrity of our platform.</li>
                </ul>
              </div>
              <div className='mb-4'>
                <h5 className='mb-2'>4.  Sharing of Your Information</h5>
                <p>We may share your information with:</p>
                <ul>
                  <li>Other Users: Some of your information, including your username, may be visible to other users.</li>
                  <li>Service Providers: We may share information with third-party service providers who assist us in delivering our services.</li>
                  <li>Legal Requirements: We may disclose information when required by law or in response to a legal request.</li>
                </ul>
              </div>
              <div className='mb-4'>
                <h5 className='mb-2'>5. Security</h5>
                <p>We take reasonable measures to protect your information, but no method of data transmission or storage is entirely secure. We cannot guarantee the security of your data.</p>
              </div>
              <div className='mb-4'>
                <h5 className='mb-2'>6. Your Choices</h5>
                <p>You may have options to access, correct, or delete your information, as well as opt-out of certain data uses. You can update your preferences in your account settings.</p>
              </div>
              <div className='mb-4'>
                <h5 className='mb-2'>7. Children's Privacy</h5>
                <p>Our services are not intended for children under 13 years of age. We do not knowingly collect information from children under 13. If you believe we have collected information from a child, please contact us to have it removed.</p>
              </div>
              <div className='mb-4'>
                <h5 className='mb-2'>8. Changes to This Policy</h5>
                <p>We may update this Privacy Policy as our practices change or as required by law. We will notify you of any material changes by posting a notice on our website.</p>
              </div>
              <div className='mb-4'>
                <h5 className='mb-2'>9.  Contact Us</h5>
                <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at support@product-geeks.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Privacy