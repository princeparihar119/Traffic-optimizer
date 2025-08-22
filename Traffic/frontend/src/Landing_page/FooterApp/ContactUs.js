import React from 'react';

const ContactUs = () => {
  return (
    <div className="container-fluid bg-light py-4">
      <div className="container">
        <h5 className="text-center mb-4">Contact Us</h5>
          <div className="col">
            <h6>Get in touch with us:</h6>
            <p><i className="fas fa-map-marker-alt"></i> 1234 Traffic Road, City, Country</p>
            <p><i className="fas fa-phone"></i> +123 456 7890</p>
            <p><i className="fas fa-envelope"></i> contact@trafficoptimizer.com</p>
            <div className="social-icons mt-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
          <p className='mt-5'>
          "Revolutionize your traffic management with our AI-powered solution!
          Monitor real-time vehicle counts and optimize flow effortlessly."
        </p>
        <p>
          "Experience seamless traffic control at your fingertips. Dive into
          real-time data and make informed decisions for safer roads!"
        </p>
        <p>
          "Unlock smart traffic insights with our intuitive dashboard. Stay
          ahead with real-time vehicle detection and analytics!"
        </p>
        </div>
      </div>
  );
};

export default ContactUs;