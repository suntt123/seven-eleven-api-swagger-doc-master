'use strict'
const { categories } = require('../../utils/fixtures')

function GetCategories(req, res) {
  res.json({
    categoryList: categories,
    totalCount: 1
  })
}

module.exports = {
  GetCategories
}