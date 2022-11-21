// external imports
const express = require("express")

// internal imports
const { getAllTotods } = require("../controller/todo.controller")

const router = express.Router()

router.get("/", getAllTotods)

module.exports = router