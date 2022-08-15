const db = require('./database')

// Return a list of all tag objects
exports.getAll = function(){
  return db.getMany()
}

// Create and save a new tag
exports.create = function(tag){
  // Build the tag object here
  db.save()
  return "ok"
}