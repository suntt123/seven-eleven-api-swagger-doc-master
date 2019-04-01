'use strict'
const { product, brands } = require('../../utils/fixtures')

function GetSearchKeyword(req, res) {
  res.json({
    productList: [{ 
      brand: brands[0],
      ...product,
    }],
    totalCount: 1
  })
}

module.exports = {
  GetSearchKeyword
}