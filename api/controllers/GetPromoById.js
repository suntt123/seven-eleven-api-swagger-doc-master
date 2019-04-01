'use strict'
const { promo, product } = require('../../utils/fixtures')

function GetPromoById(req, res) {
  res.json({
    ...promo,
    productList: [ product ],
    totalCount: 1
  })
}

module.exports = {
  GetPromoById
}