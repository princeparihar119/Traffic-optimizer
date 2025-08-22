import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-top" style={{backgroundColor: "#FBFBFB"}}>
      <div className="container">
        <div className="row mt-5">
          <div className="col">
          <Link className="navbar-brand" to="/">
          <img src="media\logo.png" style={{width:"50%", borderRadius:"10px"}} alt="Logo" />
        </Link>
            <p className="mt-3" style={{fontSize: "14px"}}>
              &copy; 2024, TrafficFlow Optimizer Ltd.<br />
              All rights reserved.
            </p>
          </div>
          <div className="col footer">
            <p>Solutions</p>
            <a href="/real-time-traffic-monitoring">Real-Time Traffic Monitoring</a><br />
            <a href="/ai-traffic-management">AI Traffic Management</a><br />
            <a href="/lane-optimization">Lane Optimization</a><br />
            <a href="/congestion-prediction">Congestion Prediction</a><br />
          </div>
          <div className="col footer">
            <p>Resources</p>
            <a href="/support">Contact Support</a><br />
            <a href="/case-studies">Case Studies</a><br />
            <a href="/blog">Traffic Insights Blog</a><br />
            <a href="/white-papers">White Papers</a><br />
          </div>
          <div className="col footer">
            <p>Company</p>
            <a href="/about">About Us</a><br />
            <a href="/careers">Careers</a><br />
            <a href="/press-media">Press & Media</a><br />
            <a href="/sustainability">Sustainability</a><br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{fontSize: "12px"}}>
          <p>
            Streamlining urban mobility with cutting-edge AI technology. Our real-time traffic optimization solutions reduce congestion, improve road safety, and enhance travel efficiency. Built to integrate seamlessly with existing infrastructure, we help cities move smarter and faster. 
            <a href="/contact">Contact us</a> to learn how we can transform your traffic management systems.
          </p>
          <p>
            Our intelligent traffic management platform leverages advanced machine learning algorithms to analyze traffic patterns, predict congestion, and optimize traffic light timings. By reducing unnecessary delays and improving traffic flow efficiency, our system helps reduce carbon emissions and creates greener, more sustainable cities.
          </p>
          <p>This footer emphasizes the core benefits of the traffic optimizer, highlights its modern and smart technology, and invites further engagement from visitors. You can adjust it based on your specific brand tone or company values.</p>
          <p className="mb-5">
            Designed for scalability, our solution can be customized to meet the unique needs of cities and municipalities, regardless of size or complexity. Whether it's managing rush hour traffic or responding to unexpected events, our real-time data-driven insights ensure smoother journeys and safer roads for all.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;