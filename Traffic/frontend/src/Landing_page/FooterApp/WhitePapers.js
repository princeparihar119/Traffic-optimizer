import React from "react";

function WhitePapers() {
  return (
    <div className="container mt-5">
      {/* Page Header */}
      <header className="text-center mb-5">
        <h1 className="display-4">Traffic Management White Papers</h1>
        <p className="lead">
          Access our latest research and insights on traffic management, AI solutions, and smart city technologies.
        </p>
      </header>

      {/* White Papers Section */}
      <div className="row">
        {/* White Paper 1 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">AI-Driven Traffic Optimization</h5>
              <p className="card-text">
                This paper explores how AI is used to predict and mitigate traffic congestion, enhancing road efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* White Paper 2 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Smart Cities: Future of Urban Mobility</h5>
              <p className="card-text">
                Delve into how smart city technologies are reshaping urban traffic management to create sustainable mobility solutions.
              </p>
            </div>
          </div>
        </div>

        {/* White Paper 3 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">The Role of Data in Traffic Flow Optimization</h5>
              <p className="card-text">
                Learn about the importance of real-time data analytics in improving traffic light timing and reducing congestion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-center mt-5">
        <p className="text-muted">
          © 2024 Traffic Insights - Cutting-edge research for traffic management solutions.
        </p>
      </footer>
    </div>
  );
}

export default WhitePapers;
