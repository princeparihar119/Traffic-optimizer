import React from "react";

function AITrafficManagement() {
  return (
    <div className="container mt-5">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="display-4">AI Traffic Management</h1>
        <p className="lead">
          Optimizing traffic flow in real-time with AI-powered solutions.
        </p>
      </div>

      {/* Key Features Section */}
      <div className="row text-center">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Real-Time Monitoring</h5>
              <p className="card-text">
                Our system monitors traffic in real-time, providing instant data
                on road conditions and traffic density.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">AI-Based Congestion Prediction</h5>
              <p className="card-text">
                Leveraging machine learning to predict traffic congestion
                patterns, helping cities manage traffic more efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Integration with Infrastructure</h5>
              <p className="card-text">
                Seamless integration with existing traffic control systems to
                reduce congestion and improve road safety.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="row my-5">
        <div className="col">
          <h2 className="text-center mb-4">Benefits of AI Traffic Management</h2>
          <p className="lead">
            Our AI Traffic Management system not only optimizes traffic flow
            but also reduces travel times, cuts down emissions, and enhances
            road safety.
          </p>
          <ul className="list-group">
            <li className="list-group-item">Improved traffic flow efficiency</li>
            <li className="list-group-item">Reduced fuel consumption</li>
            <li className="list-group-item">Lower CO2 emissions</li>
            <li className="list-group-item">Enhanced road safety</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-5 py-4 border-top">
        <p>
          Contact us to learn how our AI Traffic Management solution can help
          your city. <a href="/contact">Contact Us</a>
        </p>
        <p>&copy; 2024 AI Traffic Solutions</p>
      </footer>
    </div>
  );
}

export default AITrafficManagement;
