const db = require('./database')

// Return the change object with the given id
exports.getById = function(id){
  return db.getOne()
}

// Build a change object and return it.
// Does not save to database.
exports.build = function(){
  return {}
}