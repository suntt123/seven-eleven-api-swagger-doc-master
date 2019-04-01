'use strict'

function PutRealtimeDB(req, res) {
  const { swagger: { params: { firebasePayload } } } = req
  res.json( firebasePayload.value )
}

module.exports = {
  PutRealtimeDB
}