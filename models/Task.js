const mongoose = require("mongoose");


const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
        maxlength: [50, "Title cannot be more than 20 characters"],
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;