'use strict'
const { currentPoints } = require('../../utils/fixtures')

function GetPointsById(req, res) {
  res.json(currentPoints)
}

module.exports = {
  GetPointsById
}