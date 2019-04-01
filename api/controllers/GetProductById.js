'use strict'
const { product, brands, promo } = require('../../utils/fixtures')

function GetProductById(req, res) {
  res.json({ 
    brand: brands[0],
    promo,
    ...product,

  })
}

module.exports = {
  GetProductById
}