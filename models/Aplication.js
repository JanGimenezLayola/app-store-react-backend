'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aplicationSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: []
  },
  description: String
});

const Application = mongoose.model('Application', aplicationSchema);

module.exports = Application;