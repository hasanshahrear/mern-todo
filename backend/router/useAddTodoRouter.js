// external imports
const express = require("express")

// internal imports
const { addTodo } = require("../controller/todo.controller")

const router = express.Router()

router.post("/", addTodo)

module.exports = router