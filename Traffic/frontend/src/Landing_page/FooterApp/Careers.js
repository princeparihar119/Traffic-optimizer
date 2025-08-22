import React from "react";

function Careers() {
  return (
    <div className="container mt-5">
      {/* Page Header */}
      <header className="text-center mb-5">
        <h1 className="display-4">Join Our Team</h1>
        <p className="lead">
          Explore exciting career opportunities and help us build innovative solutions for urban traffic management.
        </p>
      </header>

      {/* About Company Culture Section */}
      <section className="mb-5">
        <h2 className="mb-4">Why Work With Us?</h2>
        <p>
          At Traffic Optimizer, we believe in fostering a collaborative and innovative environment where everyone can thrive. 
          Join us to make a real impact on the way cities operate, using cutting-edge technology to improve urban mobility and sustainability.
        </p>
        <p>
          We offer a dynamic workplace with opportunities for growth, a commitment to work-life balance, and the chance to be a part of 
          groundbreaking projects that make cities smarter, greener, and more efficient.
        </p>
      </section>

      {/* Job Listings Section */}
      <section className="mb-5">
        <h2 className="mb-4">Open Positions</h2>
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action">
            <h5 className="mb-1">Software Engineer</h5>
            <p className="mb-1">
              Location: Remote | Full-time | Department: Engineering
            </p>
            <small>Posted on October 15, 2024</small>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <h5 className="mb-1">Data Scientist</h5>
            <p className="mb-1">
              Location: New York, NY | Full-time | Department: AI & Machine Learning
            </p>
            <small>Posted on October 10, 2024</small>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <h5 className="mb-1">Product Manager</h5>
            <p className="mb-1">
              Location: San Francisco, CA | Full-time | Department: Product Development
            </p>
            <small>Posted on October 1, 2024</small>
          </a>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="mb-5">
        <h2 className="mb-4">How to Apply</h2>
        <p>
          If you’re excited about the opportunity to work with us, send your resume and a brief cover letter explaining why you’re a great fit to:
          <strong> careers@trafficoptimizer.com</strong>.
        </p>
        <p>
          We review all applications carefully, and our hiring team will be in touch if your qualifications align with any of our open positions.
        </p>
      </section>

      {/* Footer Section */}
      <footer className="text-center mt-5">
        <p className="text-muted">© 2024 Traffic Optimizer - Empowering Cities, Enhancing Mobility.</p>
      </footer>
    </div>
  );
}

export default Careers;
