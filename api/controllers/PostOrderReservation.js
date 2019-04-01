'use strict'
const { orderResponse } = require('../../utils/fixtures')

function PostOrderReservation(req, res) {
  const { swagger: { params: { order } } } = req
  const { paymentType } = order.value
  const response = {
    ...orderResponse,
    paymentType: paymentType || "PREPAID"
  }
  res.json(response)
}

module.exports = {
  PostOrderReservation
}