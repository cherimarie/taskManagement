const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')


const Change = require("./modules/change")
const Comment = require("./modules/comment")
const State = require("./modules/state")
const Task = require("./modules/task")
const Event = require("./modules/event")
const User = require("./modules/user")
const db = require("./modules/database")

app.use(bodyParser.json())

// For debugging purposes
app.get('/dataDump', (req, res)=>{
  res.status(200).json(db.dump())
})

// Comments
app.post('/comments', (req, res)=>{
  const response = Comment.create(req.body)
  res.status(200).json(response)
})

app.delete('/comments/:id', (req, res)=>{
  const response = Comment.delete(req.params.id)
  res.status(200).json(response)
})

// States
app.get('/states', (req, res)=>{
  const response = State.getAll()
  res.status(200).json(response)
})

// Tags
app.get('/tags', (req, res)=>{
  const response = Tag.getAll()
  res.status(200).json()
})

app.post('/tags', (req, res)=>{
  const response = Tag.create(req.body)
  res.status(200).json(response)
})

// Tasks
app.get('/tasks', (req, res)=>{
  const response = Task.search(req.query)
  res.status(200).json(response)
})

app.put('/tasks/:id', (req, res)=>{
  const response = Task.edit(req.params.id, req.body)
  res.status(200).json(response)
})

app.post('/tasks', (req, res)=>{
  const response = Task.create(req.body)
  res.status(200).json(response)
})

app.get('/tasks/:id/tags', (req, res)=>{
  const response = Task.getAllTags(req.params.id)
  res.status(200).json(response)
})

app.get('/tasks/:id/comments', (req, res)=>{
  const response = Task.getAllComments(req.params.id)
  res.status(200).json(response)
})

app.get('/tasks/:id/events', (req, res)=>{
  const response = Task.getAllEvents(req.params.id)
  res.status(200).json(response)
})

// Users
app.get('/users', (req, res) => {
  const response = User.getAll()
  res.json(response)
})

app.get('/users/:id', (req, res) => {
  const response = User.getById(req.params.id)
  res.json(response)
})

app.get('/users/:id/tasks', (req, res) => {
  const response = User.getAssignedTasks(req.params.id)
  res.json(response)
})

// 404 catcher
app.get('*', (req, res)=>{
  console.log("An unexpected request was received: ", req.url)
  res.status(404).send("invalid route :(")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})