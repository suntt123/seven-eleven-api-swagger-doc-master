'use strict'
const { walletTransactions } = require('../../utils/fixtures')

function GetTransactionsById(req, res) {
  res.json(walletTransactions)
}

module.exports = {
  GetTransactionsById
}