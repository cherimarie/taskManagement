const uuidv4 = require('uuid')

// Placeholder database interface
let users = [
  {id: 1, name: "Sheila Easton"},
  {id: 2, name: "Julia Gonzalez"}
]
let comments = [{id: 3, taskId: 7, userId: 1, text: "researching now!", timestamp: new Date("August 20, 2022")}]
let states = [
  {id: 99, text: "NEW"},
  {id: 98, text: "IN PROGRESS"},
  {id: 97, text: "DONE"}
]
let tasks = [
  {id: 7, title: "Implement Stripe for payments", text: "lorem ipsum", assigneeId: 1, requesterId: 2, currentStateId: 99},
  {id: 8, title: "Fix payment flow bug", text: "lorem ipsum", assigneeId: null, requesterId: 2, currentStateId: 99}
]
let tags = [
  {id: 55, name: "SPIKE"},
  {id: 56, name: "BUG"},
  {id: 57, name: "FEATURE"}
]
let taskTags = [
  {id: 71, taskId: 7, tagId: 57},
  {id: 71, taskId: 8, tagId: 56}
]
// Creating a task means all fields are updated
let changes = [
  {id: 82, eventId: 62, fieldName: "title", newValue: "Implement Stripe for payments", previousValue: null},
  {id: 83, eventId: 62, fieldName: "text", newValue: "lorem imsum", previousValue: null},
  {id: 84, eventId: 62, fieldName: "requesterId", newValue: 2, previousValue: null},
  {id: 85, eventId: 62, fieldName: "currentStateId", newValue: 99, previousValue: null},
  {id: 86, eventId: 62, fieldName: "id", newValue: 7, previousValue: null},
  {id: 87, eventId: 63, fieldName: "assigneeId", newValue: 1, previousValue: null},
  {id: 88, eventId: 64, fieldName: "title", newValue: "Fix payment flow bug", previousValue: null},
  {id: 89, eventId: 64, fieldName: "text", newValue: "lorem imsum", previousValue: null},
  {id: 90, eventId: 64, fieldName: "requesterId", newValue: 2, previousValue: null},
  {id: 91, eventId: 64, fieldName: "currentStateId", newValue: 99, previousValue: null},
  {id: 92, eventId: 64, fieldName: "id", newValue: 8, previousValue: null},
]
let events = [
  {id: 62, taskId: 7, userId: 2, timestamp: new Date("August 20, 2022")},
  {id: 63, taskId: 7, userId: 1, timestamp: new Date("August 21, 2022")},
  {id: 64, taskId: 8, userId: 2, timestamp: new Date("August 22, 2022")}
]

let data = {
  users,
  comments,
  states,
  tasks,
  tags,
  taskTags,
  changes,
  events
}
exports.create = function(table, newObj){
  if(!data[table]){throw new Error("that table doesn't exist")}
  newObj.id = uuidv4()
  data[table].push(newObj)
  return "ok"
}

exports.getOneById = function(table, id){
  return data[table].find(el => el.id == id)
}

exports.getAll = function(table){
  return data[table]
}

exports.getMany = function(table, field, value){
  return data[table].filter(el => el[field] == value)
}

// For debugging purposes
exports.dump = function(){
  return data
}