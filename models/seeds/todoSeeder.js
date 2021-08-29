const mongoose = require('mongoose')
const Todo = require('../todo')
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/todo-list'

mongoose.connect(MONGODB_URI)

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!!')
  for (let i = 0; i < 10; i++){
    Todo.create({ name: 'name-' + i})
  }
  console.log('Done.')
})