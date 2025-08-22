import React from "react";

function Sustainability() {
  return (
    <div className="container mt-5">
      {/* Page Header */}
      <header className="text-center mb-5">
        <h1 className="display-4">Our Commitment to Sustainability</h1>
        <p className="lead">
          At Traffic Optimizer, we strive to create a greener, more sustainable future through innovative solutions in urban mobility.
        </p>
      </header>

      {/* Sustainability Initiatives Section */}
      <section className="mb-5">
        <h2 className="mb-4">Sustainability Initiatives</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <h5>Smart Traffic Management Systems</h5>
            <p>
              Our AI-driven traffic optimization solutions reduce congestion, lowering vehicle emissions and improving air quality in urban areas.
            </p>
          </li>
          <li className="list-group-item">
            <h5>Promotion of Public Transport</h5>
            <p>
              We actively promote the use of public transport by providing real-time updates to commuters, encouraging a shift from personal vehicles to more sustainable options.
            </p>
          </li>
          <li className="list-group-item">
            <h5>Partnerships with Local Governments</h5>
            <p>
              Collaborating with city planners and local governments to develop and implement sustainable transportation policies and infrastructure improvements.
            </p>
          </li>
        </ul>
      </section>

      {/* Sustainability Goals Section */}
      <section className="mb-5">
        <h2 className="mb-4">Our Sustainability Goals</h2>
        <p>
          We aim to achieve the following goals by 2030:
        </p>
        <ul className="list-group">
          <li className="list-group-item">Reduce urban traffic congestion by 30%.</li>
          <li className="list-group-item">Achieve a 20% reduction in vehicle emissions through optimized traffic flow.</li>
          <li className="list-group-item">Increase public transport usage by 25% by providing real-time data to users.</li>
        </ul>
      </section>

      {/* Community Engagement Section */}
      <section className="mb-5">
        <h2 className="mb-4">Community Engagement</h2>
        <p>
          We believe in engaging with the communities we serve. Our initiatives include:
        </p>
        <ul className="list-group">
          <li className="list-group-item">Educational programs on the importance of sustainable transportation.</li>
          <li className="list-group-item">Partnerships with local organizations to promote green initiatives.</li>
          <li className="list-group-item">Regular community events focused on sustainability and urban mobility.</li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="text-center mt-5">
        <p className="text-muted">© 2024 Traffic Optimizer - Committed to a Greener Future.</p>
      </footer>
    </div>
  );
}

export default Sustainability;
