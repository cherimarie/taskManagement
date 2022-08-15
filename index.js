const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')


const Change = require("./modules/change")
const Comment = require("./modules/comment")
const State = require("./modules/state")
const Task = require("./modules/task")
const TaskChange = require("./modules/taskChange")
const User = require("./modules/user")

app.use(bodyParser.json())

// Comments
app.post('/comments', (req, res)=>{
  Comment.create(req.body)
  res.status(200).send()
})

app.delete('/comments/:id', (req, res)=>{
  Comment.delete(req.params.id)
  res.status(200).send()
})

// States
app.get('/states', (req, res)=>{
  res.status(200).json(State.getAll()).send()
})

// Tags
app.get('/tags', (req, res)=>{
  res.status(200).json(Tag.getAll()).send()
})

app.post('/tags', (req, res)=>{
  Tag.create(req.body)
  res.status(200).send()
})

// Tasks
app.get('/tasks', (req, res)=>{
  res.status(200).json(Task.search(req.query)).send()
})

app.put('/tasks/:id', (req, res)=>{
  Task.edit(req.params.id, req.body)
  res.status(200).send()
})

app.post('/tasks', (req, res)=>{
  Task.create(req.body)
  res.status(200).send()
})

app.get('/tasks/:id/tags', (req, res)=>{
  res.status(200).json(Task.getAllTags(req.params.id)).send()
})

app.get('/tasks/:id/comments', (req, res)=>{
  res.status(200).json(Task.getAllComments(req.params.id)).send()
})

app.get('/tasks/:id/taskchanges', (req, res)=>{
  res.status(200).json(Task.getAllTaskChanges(req.params.id)).send()
})

// Users
app.get('/users', (req, res) => {
  res.send(User.getAll())
})

app.get('/users/:id', (req, res) => {
  res.send(User.getById(req.params.id))
})

app.get('/users/:id/tasks', (req, res) => {
  res.send(User.getAssignedTasks(req.params.id))
})

// 404 catcher
app.get('*', (req, res)=>{
  console.log("An unexpected request was received: ", req.url)
  res.status(404).send("invalid route :(")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})