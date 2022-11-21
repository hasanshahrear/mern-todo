// external imports
const mongoose = require("mongoose")

const {Schema} = mongoose

const todoSchema = new Schema({
    title: {
        type: String,
        required: true, 
        trim: true
    },
    text: {
        type: String,
        required: true, 
        trim: true
    },
    status: {
        type: Boolean,
        emun: [true, false],
        default: false
    }
}, 
{
    timestamps: true
})
const Todo = mongoose.model("Todo", todoSchema)

module.exports= Todo

