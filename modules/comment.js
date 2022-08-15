const db = require('./database')
const TaskChange = require('./taskChange')

// Return the comment object with the given id
exports.getById = function(id){
  return db.getOne()
}

// Return all comments with the given task id
exports.getAllByTaskId = function(id){
  // Business logic about what comments to get goes here.
  // For example, if we "soft delete" comments, then there may be a more complex query here.
  return db.getMany()
}


// TODO
// Validate input, then delegate comment creation to TaskChange.
// Return created comment.
exports.create = function(taskId, userId, text){
  // Business logic about new comment validation goes here
  return TaskChange.create()
}

// Delegate change to TaskChange
exports.delete = function(commentId){
  // Business logic about how deletion happens goes here
  TaskChange.create()
}