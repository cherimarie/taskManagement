const express = require('express')
const app = express()
const port = 3000

const {getTasks} = require("./modules/user")

app.get('/', (req, res)=>{
  res.send("welcome to task maanger")
})

app.get('/user/:id/tasks', (req, res) => {
  res.send(getTasks())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})