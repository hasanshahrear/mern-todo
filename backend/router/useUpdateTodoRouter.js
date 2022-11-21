// external imports
const express = require("express")

// internal imports
const { updateTodo } = require("../controller/todo.controller")

const router = express.Router()

router.patch("/", updateTodo)

module.exports = router