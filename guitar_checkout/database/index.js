const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/guitars');

const db = mongoose.connection;

// const db = mongoose.connect('mongodb://localhost:27017/rsvp');

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = db;