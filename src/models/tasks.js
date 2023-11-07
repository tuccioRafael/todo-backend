const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
    
}, {timestamps: true});

const Task = model('Task', taskSchema);

module.exports = {
    taskSchema,
    Task,
}