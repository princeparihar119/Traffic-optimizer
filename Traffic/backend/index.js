const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
const Support = require('./Schema/supportschema');
const mongoose = require('mongoose')

const app = express();

// Middlewarey
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/traffic", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.post("/support", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newSupport = new Support({ name, email, message });

    await newSupport.save();

    res
      .status(200)
      .json({ message: "Support message submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error submitting support message." });
  }
});

// Endpoint to receive video selection from React and send video to Python
app.post('/api/save-video', async (req, res) => {
    const { videoName } = req.body;

    // Check if video name was provided
    if (!videoName) {
        return res.status(400).json({ message: 'Video name is required.' });
    }

    try {
        // Path to the video file in your server
        const videoPath = path.join(__dirname, `./videos/${videoName}`);

        // Check if the video file exists
        if (!fs.existsSync(videoPath)) {
            return res.status(404).json({ message: 'Video file not found.' });
        }

        // Prepare the form data with the video file to send to Python backend
        const form = new FormData();
        form.append('video', fs.createReadStream(videoPath));

        // Send the video to the Flask server
        const pythonResponse = await axios.post('http://127.0.0.1:5000/upload_video', form, {
            headers: {
                ...form.getHeaders(),
            },
        });

        // Log and check Python server response
        console.log('Response from Python:', pythonResponse.data);

        // If Python responds with some car_count, forward it to the frontend
        if (pythonResponse.data && pythonResponse.data.car_count !== undefined) {
            res.status(200).json({
                message: 'Video processed successfully!',
                car_count: pythonResponse.data.car_count,  // Send car count to React frontend
            });
        } else {
            res.status(200).json({
                message: 'Video sent successfully, but no car count returned from Python.',
                pythonData: pythonResponse.data,  // Forward Python response in case you want to debug
            });
        }

    } catch (error) {
        // Handle errors
        console.error('Error sending video to Python:', error);
        res.status(500).json({ message: 'Error processing video.', error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
