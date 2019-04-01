'use strict'
const { categoriesFilter, brandsFilter, product, brands } = require('../../utils/fixtures')

function GetProductByCategory(req, res) {
  res.json({
    productLists: [{ 
      brand: brands[0],
      ...product,
    }],
    totalCount: 1
  })
}

module.exports = {
  GetProductByCategory
}