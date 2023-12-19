const Guitars = require('../models/guitars.js');

module.exports = {
  getAll: (req, res) => {

  },
  createGuitar: async (req, res) => {
    Guitars.create(req.body)
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      if (err.code === 11000) {
        res.json(`Duplicate Entry: Guitar with builder name ${req.body.builderName} of year ${req.body.specs.year} already exists`)
      } else {
        res.sendStatus(500)
      }
    })
  }
}