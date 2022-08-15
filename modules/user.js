const db = require('./database')

// Return the user object with the given id
exports.getById = function(id){
  return db.getOne()
}

// Return all tasks that have this user as "assignee"
exports.getAssignedTasks = function(id){
  return db.getMany()
}

// Return a list of all users
// REVIEW: would this make sense with the scale of our data?
exports.getAll = function(){
  return db.getMany()
}

// Return all the user objects that match the given query
exports.search = function(query){
  return db.getMany()
}