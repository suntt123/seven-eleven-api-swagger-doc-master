'use strict'
const { featuredCategories } = require('../../utils/fixtures')

function GetFeaturedCategories(req, res) {
  res.json({
    categoryList: featuredCategories,
    totalCount: 1
  })
}

module.exports = {
  GetFeaturedCategories
}