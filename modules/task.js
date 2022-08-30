const db = require('./database')

// Return the task object with the given id
exports.getById = function(id){
  return db.getOneById("tasks", id)
}

// Return all task objects that match the query
exports.search = function(query){
  return db.getMany("tasks", query.field, query.value)
}

// Return the tags associated with the given task
exports.getAllTags = function(taskId){
  const taskTags =  db.getMany("taskTags", "taskId", taskId)
  return taskTags.map(tata => db.getMany("tags", "id", tata.tagId)).flat(1)
}

// Return the comments associated with the given task
exports.getAllComments = function(taskId){
  return db.getMany("comments", "taskId", taskId)
}

// Return the events associated with the given task
exports.getAllEvents = function(taskId){
  const events = db.getMany("events", "taskId", taskId)
  return events.map(ev => db.getMany("changes", "eventId", ev.id)).flat(1)
}

// TODO
exports.edit = function(id, data){
  // return db.getOneById("tasks", taskId)
  return {}
}

// TODO
// Validate input, then delegate task creation to Event.
// Return created task.
exports.create = function(newTask){
  // Business logic about new task validation goes here
  return Event.create()
}