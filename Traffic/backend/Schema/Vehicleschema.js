const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    vehicleType: { type: String, required: true },
    count: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
});
const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;