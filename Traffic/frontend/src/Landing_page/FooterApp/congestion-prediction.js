import React from "react";

function CongestionPrediction() {
  return (
    <div className="container mt-5">
      {/* Page Header */}
      <div className="text-center mb-4">
        <h1 className="display-4">AI-Driven Congestion Prediction</h1>
        <p className="lead">
          Predicting traffic congestion before it happens, improving road safety and efficiency.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="row my-5">
        <div className="col-md-6">
          <h2>How Congestion Prediction Works</h2>
          <p>
            Using advanced algorithms and real-time data, AI-powered systems analyze traffic patterns to
            predict congestion before it occurs. By studying traffic flow, vehicle density, and historical
            data, congestion can be forecasted, allowing for proactive measures to alleviate traffic jams.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Benefits of Predicting Congestion</h2>
          <ul className="list-group">
            <li className="list-group-item">Reduces traffic bottlenecks</li>
            <li className="list-group-item">Minimizes travel time</li>
            <li className="list-group-item">Improves road safety</li>
            <li className="list-group-item">Enhances urban mobility</li>
            <li className="list-group-item">Decreases vehicle emissions</li>
          </ul>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="row text-center my-5">
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="card-title">Real-Time Data Integration</h5>
            <p className="card-text">
              Collects and analyzes data from multiple sources to give live traffic updates.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="card-title">Predictive Analysis</h5>
            <p className="card-text">
              Utilizes AI to predict congestion hours before it occurs, enabling preventive action.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="card-title">Traffic Diversion</h5>
            <p className="card-text">
              Recommends alternate routes or lane changes to reduce the impact of traffic congestion.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-5">
        <p className="text-muted">
          © 2024 Traffic Solutions - Predicting traffic congestion for smoother, safer journeys.
        </p>
      </div>
    </div>
  );
}

export default CongestionPrediction;
