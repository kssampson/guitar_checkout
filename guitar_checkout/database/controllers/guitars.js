const Guitars = require('../models/guitars.js');

module.exports = {
  getAll: (req, res) => {
    Guitars.find(
      {available: true},
      {builderName: 1, specs: 1, description: 1, _id: 0}
    )
    .then((results) => {
      console.log('results: ', results)
      res.json(results)
    })
    .catch((err) => {
      console.log('err getting available guitars: ', err)
      res.sendStatus(500)
    })
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