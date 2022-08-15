const db = require('./database')

// Return the task object with the given id
exports.getById = function(id){
  return db.getOne()
}

// Return all task objects that match the query
exports.search = function(query){
  return db.getMany()
}

// Return the tags associated with the given task
exports.getAllTags = function(taskId){
  return db.getMany()
}

// Return the comments associated with the given task
exports.getAllComments = function(taskId){
  return db.getMany()
}

// Return the task changes associated with the given task
exports.getAllTaskChanges = function(taskId){
  return db.getMany()
}

// TODO
exports.edit = function(id, data){
  return db.getOne()
}

// TODO
exports.create = function(data){
  return db.getOne()
}