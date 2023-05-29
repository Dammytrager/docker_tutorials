const express = require('express')
const Todo = require("./models/Todo");
const app = express()

app.get('/', async function (req, res, next) {
  try {
    await Todo.create({ item: "Wake up", status: "done" });
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (e) {
    next(e)
  }
});

app.use((err, req, res, next) => {
  console.log(err)
  res.json({message: 'An error occurred'})
})

app.listen(5800, () => {
  console.log('Listening on port 5800')
})