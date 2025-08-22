import React from 'react';

function RealTimeTrafficMonitoring() {
  return (
    <div className="container p-5">
      <h1 className="text-center mb-5">Real-Time Traffic Monitoring</h1>
      
      <div className="row">
        <div className="col-md-6">
          <img 
            src="media/footer 1.jpg" 
            alt="Real-Time Traffic Monitoring" 
            className="img-fluid"
            style={{ height:'95%', width:'65%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} 
          />
        </div>

        <div className="col-md-6">
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            Our real-time traffic monitoring system continuously gathers and processes data from various sources such as traffic cameras, sensors, and satellite feeds. This data helps cities track the movement of vehicles and pedestrians, giving them the ability to respond quickly to changes in traffic patterns.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            By utilizing advanced machine learning algorithms, the system can detect congestion, incidents, and bottlenecks in real-time. This allows traffic control centers to make timely decisions, optimizing traffic signal timings and adjusting lane directions for smoother traffic flow.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            Our monitoring system also provides valuable insights into traffic trends, which can be used for long-term urban planning and infrastructure development. With this technology, cities can manage traffic proactively, improving mobility and reducing commute times for their citizens.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col text-center">
          <h2 className="mb-4">Key Features</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <h4>Real-Time Data</h4>
          <p>Continuously monitor traffic data from multiple sources to provide up-to-the-minute updates.</p>
        </div>
        <div className="col-md-4">
          <h4>Incident Detection</h4>
          <p>Automatically detect and alert authorities to accidents, breakdowns, and other incidents.</p>
        </div>
        <div className="col-md-4">
          <h4>Optimized Traffic Flow</h4>
          <p>Adjust traffic signals and lane directions based on real-time conditions to reduce congestion.</p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <h4>Predictive Analytics</h4>
          <p>Use historical and real-time data to predict congestion and plan for traffic surges.</p>
        </div>
        <div className="col-md-4">
          <h4>Integration</h4>
          <p>Integrate seamlessly with existing traffic control systems and infrastructure.</p>
        </div>
        <div className="col-md-4">
          <h4>Data Visualization</h4>
          <p>Gain insights from intuitive visual dashboards showing traffic trends, patterns, and KPIs.</p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col text-center">
          <h2>Benefits of Real-Time Traffic Monitoring</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            <li>Reduce congestion and delays</li>
            <li>Improve road safety by responding to incidents quickly</li>
            <li>Lower carbon emissions by optimizing traffic flow</li>
            <li>Enhance travel experiences for commuters</li>
            <li>Support better long-term urban planning</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img 
            src="media/footer2.jpg" 
            alt="Traffic Dashboard" 
            className="img-fluid"
            style={{ height:'50%', width:'50%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} 
          />
        </div>
      </div>
    </div>
  );
}

export default RealTimeTrafficMonitoring;
