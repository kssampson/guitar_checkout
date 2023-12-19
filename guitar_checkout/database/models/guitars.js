const mongoose = require('mongoose');

const guitarsSchema = mongoose.Schema({
  builderName: String,
  available: Boolean,
  requested: Boolean,
  requests: [{
    firstName: String,
    lastName: String,
    email: String,
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
    year: Number,
    tunerType: String,
    topWood: String,
    backAndSides: String,
    scaleLength: Number,
    nutWidth: Number
  },
  images: Array,
  description: String
});

guitarsSchema.index({builderName: 1, year: 1}, {unique: true});

const Guitars = mongoose.model('Guitars', guitarsSchema);

module.exports = Guitars;