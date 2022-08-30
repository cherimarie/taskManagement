const db = require('./database')

// Return the user object with the given id
exports.getById = function(id){
  return db.getOneById("users", id)
}

// Return all tasks that have this user as "assignee"
exports.getAssignedTasks = function(id){
  return db.getMany("tasks", "assigneeId", id)
}

// Return a list of all users
// REVIEW: would this make sense with the scale of our data?
exports.getAll = function(){
  return db.getAll("users")
}

// Return all the user objects that match the given query
exports.search = function(query){
  return db.getMany("users", query.field, query.value)
}