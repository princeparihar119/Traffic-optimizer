import React from "react";

function HomePage() {
  return (
    <div className="container_home">
      <div className="row home_row">
        <div className="home_col-4">
          <img
            className="home_img"
            src="media/Traffic_2.jpg"
            alt="Traffic Scene 2"
          />
        </div>
        <div className="col-4">
          <img
            className="home_img"
            src="media/Traffic_1.jpg"
            alt="Traffic Scene 1"
          />
        </div>
        <div className="col-4">
          <img
            className="home_img"
            src="media/Traffic_3.jpg"
            alt="Traffic Scene 3"
          />
        </div>
        <p className="mt-5">
        Welcome to Traffic Optimizer <br/>
        <ul>
          
        <li>At Traffic Optimizer, we specialize in helping businesses and urban planners manage traffic flow more efficiently.</li> <li>Our innovative solutions are designed to reduce congestion, improve commute times, and enhance road safety.</li>
        </ul>
        </p>
        <p>
        Why Choose Traffic Optimizer?<br/>
        <ul>

<li>Real-Time Analytics: Our platform provides live traffic data and predictive insights to optimize road usage and reduce bottlenecks.<br/></li>

<li>Advanced Algorithms: We utilize cutting-edge AI and machine learning technologies to forecast traffic patterns and provide smart routing suggestions.</li>
<li>Scalable Solutions: Whether you're managing a small city or a large metropolitan area, Traffic Optimizer scales with your needs.</li>
        </ul>
        </p>
        <p>
        Our Key Features<br/>
        <ul>

<li>Dynamic Traffic Control: Real-time traffic light optimization to balance load across intersections and minimize delays.</li>
<li>Incident Detection: Early detection of accidents, road closures, and other incidents to quickly reroute traffic and avoid congestion.</li>
<li>Route Optimization: Personalized, faster routes for drivers, reducing travel time and fuel consumption.</li>
        </ul>
        </p>
        <p>Our Mission<br/>
        
At Traffic Optimizer, our mission is to make traffic management smarter, faster, and more efficient. We believe in the power of data-driven solutions to transform cities into safer, more sustainable environments for all.

</p>
      </div>
    </div>
  );
}

export default HomePage;