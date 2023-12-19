const mongoose = require('mongoose');

const guitarsSchema = mongoose.Schema({
  builderName: String,
  available: Boolean,
  requested: Boolean,
  requestBy: [{
    firstName: String,
    lastName: String,
    studentId: Number,
    requestDate: Date,
    requestDuration: Number
  }],
  checkedOutBy: {
    firstName: String,
    lastName: String,
    studentId: Number,
    duration: Number
  },
  specs: {
    tunerType: String,
    topWood: String,
    backAndSides: String,
    scaleLength: Number,
    nutWidth: Number
  },
  image: String,
  description: String
});

const Guitars = mongoose.model('Guitars', guitarsSchema);

module.exports = Guitars;