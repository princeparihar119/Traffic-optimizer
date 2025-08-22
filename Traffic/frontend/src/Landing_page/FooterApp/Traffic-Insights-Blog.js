import React from "react";

function TrafficInsightsBlog() {
  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1 className="display-4">Traffic Insights Blog</h1>
        <p className="lead">
          Stay updated with the latest trends and insights in traffic management and optimization.
        </p>
      </header>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">How AI is Revolutionizing Traffic Management</h5>
              <p className="card-text">
                Discover how artificial intelligence is transforming the way cities manage traffic congestion,
                optimize traffic signals, and improve road safety.
              </p>
            </div>
            
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">5 Tips to Reduce Urban Traffic Congestion</h5>
              <p className="card-text">
                Learn actionable strategies that city planners and citizens can adopt to help reduce the
                strain on urban roads and improve mobility.
              </p>
            </div>
            
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Smart Cities and Traffic Optimization</h5>
              <p className="card-text">
                Explore the role of smart city technology in creating efficient, sustainable urban environments
                through better traffic management systems.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center mt-5">
        <p className="text-muted">
          © 2024 Traffic Insights - Your source for the latest in traffic management.
        </p>
      </footer>
    </div>
  );
}

export default TrafficInsightsBlog;
