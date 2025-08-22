
from flask import Flask, request, jsonify
import os
import cv2
from ultralytics import YOLO
import cvzone
import math
from sort import *
import numpy as np

app = Flask(__name__)

UPLOAD_FOLDER = './uploads'

# Ensure the uploads folder exists
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Load YOLOv8 pre-trained model (for COCO dataset, which includes car detection)
model = YOLO('yolov8n.pt')  # Initialize YOLOv8 once globally


@app.route('/upload_video', methods=['POST'])
def upload_video():
    if 'video' not in request.files:
        return jsonify({"error": "No video file provided"}), 400

    video = request.files['video']

    if video.filename == '':
        return jsonify({"error": "No selected file"}), 400

    # Save the uploaded video to the uploads folder
    video_path = os.path.join(app.config['UPLOAD_FOLDER'], video.filename)
    video.save(video_path)

    # Process the video and count cars
    car_count = count_cars_in_video(video_path)

    # Return the count of cars
    return jsonify({'message': 'Video processed successfully', 'car_count': car_count})

def count_cars_in_video(video_path):
    # Open the video file using OpenCV
    cap = cv2.VideoCapture(video_path)

    classNames = ["person", "bicycle", "car", "motorbike", "aeroplane", "bus", "train", "truck", "boat",
                  "traffic light", "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat",
                  "dog", "horse", "sheep", "cow", "elephant", "bear", "zebra", "giraffe", "backpack", "umbrella",
                  "handbag", "tie", "suitcase", "frisbee", "skis", "snowboard", "sports ball", "kite", "baseball bat",
                  "baseball glove", "skateboard", "surfboard", "tennis racket", "bottle", "wine glass", "cup",
                  "fork", "knife", "spoon", "bowl", "banana", "apple", "sandwich", "orange", "broccoli",
                  "carrot", "hot dog", "pizza", "donut", "cake", "chair", "sofa", "pottedplant", "bed",
                  "diningtable", "toilet", "tvmonitor", "laptop", "mouse", "remote", "keyboard", "cell phone",
                  "microwave", "oven", "toaster", "sink", "refrigerator", "book", "clock", "vase", "scissors",
                  "teddy bear", "hair drier", "toothbrush"]

    # Tracking
    tracker = Sort(max_age=20, min_hits=1, iou_threshold=0.3)

    totalCount = set()  # Use a set to store unique car IDs

    # Define the Region of Interest (ROI) for the front lane (adjust these coordinates based on your video)
    roi_top_left = (50, 30)  # Example coordinates for top-left corner of the ROI
    roi_bottom_right = (1000, 2000)  # Example coordinates for bottom-right corner of the ROI

    while cap.isOpened():
        success, img = cap.read()

        if not success:
            break  # Exit loop when video ends

        # Optionally, draw the ROI rectangle on the image for visualization
        cv2.rectangle(img, roi_top_left, roi_bottom_right, (0, 255, 0), 2)

        # Process the frame with YOLOv8
        results = model(img, stream=True)

        detections = np.empty((0, 5))  # For tracking detected objects

        for r in results:
            boxes = r.boxes
            for box in boxes:
                # Bounding Box
                x1, y1, x2, y2 = map(int, box.xyxy[0])
                w, h = x2 - x1, y2 - y1

                # Confidence
                conf = math.ceil((box.conf[0] * 100)) / 100
                cls = int(box.cls[0])
                currentClass = classNames[cls]

                # Only consider vehicles (cars, trucks, buses, motorbikes) with confidence > 0.3
                if currentClass in ["car", "truck", "bus", "motorbike"] and conf > 0.3:
                    # Check if the vehicle is inside the defined ROI for the front lane
                    if roi_top_left[0] < x1 < roi_bottom_right[0] and roi_top_left[1] < y1 < roi_bottom_right[1]:
                        currentArray = np.array([x1, y1, x2, y2, conf])
                        detections = np.vstack((detections, currentArray))

        # Apply tracking to the detected objects
        resultsTracker = tracker.update(detections)

        for result in resultsTracker:
            x1, y1, x2, y2, id = map(int, result)
            w, h = x2 - x1, y2 - y1

            # Draw bounding box and ID
            cvzone.cornerRect(img, (x1, y1, w, h), l=9, rt=2, colorR=(255, 0, 255))
            cvzone.putTextRect(img, f' {int(id)}', (max(0, x1), max(35, y1)), scale=2, thickness=3, offset=10)

            # Add the car's ID to the total count if it's within the ROI
            totalCount.add(id)

        # Optionally display the current frame
        cv2.imshow("Image", img)
        cv2.waitKey(1)  # You can comment this out if you don't want to display the video

    cap.release()

    # Return the total count of cars in the front lane
    return len(totalCount)

if __name__ == '__main__':
    app.run(debug=True)
