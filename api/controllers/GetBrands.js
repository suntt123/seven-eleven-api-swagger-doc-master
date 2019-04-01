'use strict'
const { brands } = require('../../utils/fixtures')

function GetBrands(req, res) {
  res.json({
    brandList: brands,
    totalCount: 6
  })
}

module.exports = {
  GetBrands
}