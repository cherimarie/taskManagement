const db = require('./database')

// Return a list of all state objects
exports.getAll = function(){
  return db.getAll("states")
}