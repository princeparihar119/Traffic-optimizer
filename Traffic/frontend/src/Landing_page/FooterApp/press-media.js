import React from "react";

function PressMedia() {
  return (
    <div>
      {/* Follow Us Section */}
      <div className="container text-center py-4">
        <h5>Follow Us</h5>
        <div className="d-flex justify-content-center">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary mx-2"
          >
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary mx-2"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary mx-2"
          >
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary mx-2"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>

      <div className="container mt-5">
        {/* Page Header */}
        <header className="text-center mb-5">
          <h1 className="display-4">Press & Media</h1>
          <p className="lead">
            Stay updated with the latest news, media resources, and press releases from our company.
          </p>
        </header>

        {/* Press Releases Section */}
        <section className="mb-5">
          <h2 className="mb-4">Recent Press Releases</h2>
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
              <h5 className="mb-1">AI-Driven Traffic Solutions Win Innovation Award</h5>
              <p className="mb-1">October 20, 2024 - Our groundbreaking AI-driven traffic solutions have been recognized for their innovation at the Smart City Expo.</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <h5 className="mb-1">Company Launches Real-Time Traffic Monitoring System</h5>
              <p className="mb-1">September 15, 2024 - We are excited to announce the launch of our real-time traffic monitoring system, revolutionizing urban mobility.</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <h5 className="mb-1">Partnership with City of New York on Traffic Optimization</h5>
              <p className="mb-1">August 10, 2024 - We have partnered with New York City to enhance traffic flow and reduce congestion with cutting-edge technology.</p>
            </a>
          </div>
        </section>

        {/* Media Kits Section */}
        <section className="mb-5">
          <h2 className="mb-4">Media Kits</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Company Overview</h5>
                  <p className="card-text">
                    Download our company overview, complete with key facts, mission statement, and latest achievements.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Brand Assets</h5>
                  <p className="card-text">
                    Access our brand guidelines, logos, and official media images for use in your coverage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Media Inquiries */}
        <section>
          <h2 className="mb-4">Media Contact</h2>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Get in Touch</h5>
              <p className="card-text">
                For media inquiries, please contact our press team at:
              </p>
              <p className="mb-0"><strong>Email:</strong> press@trafficoptimizer.com</p>
              <p className="mb-0"><strong>Phone:</strong> +1 (800) 123-4567</p>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="text-center mt-5">
          <p className="text-muted">
            © 2024 Traffic Insights - Your source for the latest in traffic management technology.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default PressMedia;
