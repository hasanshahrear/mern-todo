// external imports
const express = require("express")

// internal imports
const { deleteTodo } = require("../controller/todo.controller")

const router = express.Router()

router.delete("/", deleteTodo)

module.exports = router