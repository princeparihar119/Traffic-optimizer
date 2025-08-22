import React, { useEffect } from "react";

const Video = () => {
  useEffect(() => {
    const videoElement = document.getElementById("about-video");
    if (videoElement) {
      videoElement.play();
    }
  }, []);

  return (
    <div className="container_about">
      <h1 className="heading">About Us</h1>
      
      <p className="description">
        Our AI-powered traffic optimization system is designed to monitor traffic in real-time,
        detect vehicles, and optimize lane switching to ensure smoother and more efficient traffic flow.
        By integrating advanced machine learning algorithms, we help cities reduce congestion and improve overall mobility.
      </p>

      <div className="videoContainer">
        <video
          id="about-video"
          autoPlay
          loop
          muted
          controls
        >
          <source src="media/traffic_video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <p className="additionalInfo">
        Our system can easily integrate with existing traffic infrastructure, providing live updates and real-time control.
        Want to learn more about how we’re transforming urban mobility?
        <a href="/contact">Contact Us!</a>
      </p>
    </div>
  );
};

export default Video;