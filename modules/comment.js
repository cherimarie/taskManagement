const db = require('./database')
const Event = require('./event')

// Return the comment object with the given id
exports.getById = function(id){
  return db.getOneById("comments", id)
}

// Return all comments with the given task id
exports.getAllByTaskId = function(id){
  // Business logic about what comments to get goes here.
  // For example, if we "soft delete" comments, then there may be a more complex query here.
  return db.getMany("comments", "taskId", id)
}


// TODO
// Validate input, then delegate comment creation to Event.
// Return created comment.
exports.create = function(newComment){
  // Business logic about new comment validation goes here
  return Event.create()
}

// TODO
// Delegate change to Event
exports.delete = function(commentId){
  // Business logic about how deletion happens goes here
  Event.create()
}