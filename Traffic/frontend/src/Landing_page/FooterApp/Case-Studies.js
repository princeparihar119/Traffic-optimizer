import React from 'react';

const CaseStudy = () => {
  return (
    <div className="container-fluid bg-light py-4">
      <div className="container">
        <h5 className="text-center mb-4">Our Case Studies</h5>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Case Study 1</h5>
                <p className="card-text">
                  Brief description of the case study focusing on the problem, solution, and results.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Case Study 2</h5>
                <p className="card-text">
                  Brief description of the case study focusing on the problem, solution, and results.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Case Study 3</h5>
                <p className="card-text">
                  Brief description of the case study focusing on the problem, solution, and results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;