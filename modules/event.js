const db = require('./database')

// Methods related to audit trail functionality
exports.getById = function(id){
  return db.getOneById("events", id)
}

exports.getAllByTaskId = function(id){
  return db.getMany("events", "taskId", id)
}

exports.getAllByUserId = function(id){
  return db.getMany("events", "userId", id)
}

exports.getAllByDateRange = function(start, end){
  // TODO
  // return db.getMany("events")
  return []
}

// Event module is in charge of all mutating actions, as it builds the audit trail for a Task.
// This should be the only module that writes any changes to Comments or Tasks to the database.
exports.create = function(changes){
  return db.save()
}