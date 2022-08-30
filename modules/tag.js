const db = require('./database')

// Return a list of all tag objects
exports.getAll = function(){
  return db.getAll("tags")
}

// Create and save a new tag
exports.create = function(tag){
  // Build the tag object here
  let response = db.create(tag)
  return response
}