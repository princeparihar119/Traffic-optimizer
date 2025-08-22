const express = require('express');
const mongoose = require('mongoose');

const supportSchema = new mongoose.Schema({
   name: String,
   email: String,
   message: String,
   date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Support', supportSchema);