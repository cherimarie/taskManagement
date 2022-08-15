const db = require('./database')

// Methods related to audit trail functionality
exports.getById = function(id){
  return db.getOne()
}

exports.getAllByTaskId = function(id){
  return db.getMany()
}

exports.getAllByUserId = function(id){
  return db.getMany()
}

exports.getAllByDateRange = function(start, end){
  return db.getMany()
}

// TaskChange module is in charge of all mutating actions, as it builds the audit trail for a Task.
// This should be the only module that writes any changes to Comments or Tasks to the database.
exports.create = function(changes){
  return db.save()
}