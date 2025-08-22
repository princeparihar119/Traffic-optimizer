import React from "react";

function LaneOptimization() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-4">AI-Powered Lane Optimization</h1>
        <p className="lead">
          Maximizing traffic flow efficiency with AI-driven lane management.
        </p>
      </div>
      <div className="row my-5">
        <div className="col-md-6">
          <h2>What is Lane Optimization?</h2>
          <p>
            Lane optimization utilizes artificial intelligence to monitor traffic conditions in
            real-time and adjust the usage of lanes dynamically. It optimizes traffic flow by
            changing lane priorities to reduce congestion, especially during peak hours.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Key Benefits</h2>
          <ul className="list-group">
            <li className="list-group-item">Improves traffic efficiency</li>
            <li className="list-group-item">Reduces congestion</li>
            <li className="list-group-item">Decreases travel time</li>
            <li className="list-group-item">Reduces fuel consumption</li>
            <li className="list-group-item">Enhances road safety</li>
          </ul>
        </div>
      </div>
      <div className="row text-center my-5">
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="card-title">Real-Time Data Analysis</h5>
            <p className="card-text">
              Continuously monitors traffic conditions to make lane adjustments in real-time.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="card-title">Dynamic Lane Switching</h5>
            <p className="card-text">
              Automatically adjusts lane usage based on peak hours and traffic density.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="card-title">Reduced Congestion</h5>
            <p className="card-text">
              Enhances road capacity and minimizes traffic bottlenecks.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <p className="text-muted">
          © 2024 Traffic Solutions - Optimizing traffic flow for smarter cities.
        </p>
      </div>
    </div>
  );
}

export default LaneOptimization;
