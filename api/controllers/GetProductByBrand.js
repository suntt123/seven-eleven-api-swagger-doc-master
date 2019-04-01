'use strict'
const { categoriesFilter, product, brands, categories } = require('../../utils/fixtures')

function GetProductByBrand(req, res) {
  res.json({
    productLists: [{ 
      brand: brands[0],
      ...product,
    }],
    totalCount: 1
  })
}

module.exports = {
  GetProductByBrand
}