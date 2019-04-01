'use strict';
const { promos } = require('../../utils/fixtures')

function GetAllPromos(req, res, next) {
  res.json(promos)
}

module.exports = {
  GetAllPromos : GetAllPromos
}
