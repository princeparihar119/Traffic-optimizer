import React, { useState, useEffect } from 'react';
import axios from 'axios';
import roadImage from './RoadImage.jpg'; // Ensure this path is correct for your road image
 

const Dashboard = () => {
    const [selectedVideo, setSelectedVideo] = useState(''); // To store selected video
    const [road, setRoad] = useState(1); // Current road (1 to 4)
    const [carCount, setCarCount] = useState(null); // Store car count
    const [timer, setTimer] = useState(0); // Store countdown timer
    const [isTimerRunning, setIsTimerRunning] =  useState(false); // Control the timer
    const [isProcessing, setIsProcessing] = useState(false); // Show loading spinner
    const [showNextRoadMessage, setShowNextRoadMessage] = useState(false); // Show next road message

    const videoOptions = ['videop1.mp4', 'videop2.mp4', 'videop3.mp4', 'videop4.mp4', 'videop5.mp4','videop6.mp4', 'videop7.mp4', 'videop8.mp4', 'videop9.mp4','videop10.mp4','videop11.mp4']; // Predefined video options

    // Function to handle video submission for each road
    const handleSubmit = async () => {
        if (!selectedVideo) {
            alert(`Please select a video for Road ${road}!`);
            return;
        }

        // Start processing and show spinner
        setIsProcessing(true);
        setShowNextRoadMessage(false);

        try {
            // Send the selected video to the Node.js backend
            const response = await axios.post('http://localhost:5000/api/save-video', {
                videoName: selectedVideo
            });

            // If car count is returned, set it and start the timer
            if (response.data.car_count !== undefined) {
                setCarCount(response.data.car_count);
                setTimer(response.data.car_count * 1); // Example: 1 second per car
                setIsTimerRunning(true); // Start the timer
            }

        } catch (error) {
            console.error('Error sending video:', error);
        } finally {
            setIsProcessing(false); // Hide spinner once video is processed
        }
    };

    // Timer effect to countdown
    useEffect(() => {
        if (timer > 0 && isTimerRunning) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            return () => clearInterval(interval); // Cleanup interval
        }

        // When timer reaches 0, stop the timer and move to the next road
        if (timer === 0 && isTimerRunning) {
            setIsTimerRunning(false); // Stop the timer
            setCarCount(null); // Reset car count
            setShowNextRoadMessage(true); // Show message for next road

            // Move to the next road
            setRoad((prevRoad) => (prevRoad < 4 ? prevRoad + 1 : 1)); // Loop from 1 to 4 roads
        }

    }, [timer, isTimerRunning]);

    return (
        <div className="dashboard">
            <h1 className="title"> </h1>

            

            {/* Video selection dropdown */}
            <select className="video-select" onChange={(e) => setSelectedVideo(e.target.value)} value={selectedVideo}>
                <option value=""> Select a Video for Road {road}</option>
                {videoOptions.map((video, index) => (
                    <option key={index} value={video}>
                        {video}
                    </option>
                ))}
            </select>

            {/* Submit button */}
            <button className="submit-btn" onClick={handleSubmit} disabled={isProcessing}>
                {isProcessing ? "Processing..." : `Submit Video for Road ${road}`}
            </button>

            {/* Loading Spinner */}
            {isProcessing && (
                <div className="loading-spinner">
                    <div className="spinner"></div>
                    <p>Processing video for Road {road}, please wait...</p>
                </div>
            )}

            {/* Show car count and timer */}
            {carCount !== null && (
                <div className="info-section">
                    <p>Car Count on Road  {road}: {carCount}</p>
                    <p>Time Remaining: {timer} seconds</p>
                </div>
            )}

            {/* Show next road popup message */}
            {showNextRoadMessage && (
                <div className="next-road-message">
                    <p>Timer finished! Please submit a video for Road {road}.</p>
                </div>
            )}

            {/* Road Image */}
            <div className="road-container">
                <img src={roadImage} alt="Traffic Road" className="road-image" />
            </div>
        </div>
    );
};

export default Dashboard;
