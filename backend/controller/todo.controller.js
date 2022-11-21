// external imports


// internal imports
const Todo = require("../models/todo.model")

// get all todos
async function getAllTotods(req, res){
    try{
        const todos = await Todo.find()
        res.status(200).json({
            message: "Todo added successfully",
            status: true,
            data: todos
        })
    }catch(error){
        res.status(500).json({
            message: "Can't find data",
            status: false,
        })
    }   
}

// add todo
async function addTodo(req, res){
    const todo = new Todo({
        ...req.body
    });

    try {
        await todo.save()
        res.status(200).json({
            message: "Todo added successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Todo did not added"
        })
    }
}

// delete todo
async function deleteTodo(req, res){
    try{
        await Todo.findOneAndDelete(req.body._id)
        res.status(200).json({
            message: "Todo deleted successfully"
        })

    }catch(error){
        res.status(500).json({
            message: "Todo id not match"
        })
    }
}

// update todo
async function updateTodo(req, res){
    try{
        await Todo.findOneAndUpdate(req.body._id, {...req.body})
        res.status(200).json({
            message: "Todo update successfully"
        })
    }catch(error){
        res.status(500).json({
            message: "Todo didn't update"
        })
    }
}


module.exports = {
    getAllTotods,
    addTodo,
    deleteTodo,
    updateTodo
}