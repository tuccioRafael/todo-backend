const { Task } = require('../models/tasks');

const createTask = async (req, res) => {
    try {
        const task = req.body;
        if(task.name.length <= 4){
            res.status(400).json({error: 'A descrição da tarefa deve ter no minimo 5 caracteres'})
        }else {
            await Task.create(task);
            res.status(201).json();
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getOneTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if(!task){
            res.status(404).json({error: 'Not found'});
        }else {
            res.status(200).json(task);
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = req.body;
        if(task.name.length <= 4){
            res.status(400).json({error: 'A descrição da tarefa deve ter no minimo 5 caracteres'})
        }else {
            await Task.findByIdAndUpdate(id, task);
            res.status(200).json();
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await Task.findByIdAndDelete(id);
        res.status(200).json();
    } catch (err) {
        res.status(500).json(err);
    }
}

const completeTask = async (req, res) => {
    try {
        const { done } = req.body;
        const { id } = req.params;
        await Task.findByIdAndUpdate(id, {done}); 
        res.status(200).json();
    } catch (err) {
        res.status(500).json(err);
    }
}


module.exports = {
    createTask,
    getAllTasks,
    getOneTaskById,
    updateTask,
    deleteTask,
    completeTask,
}