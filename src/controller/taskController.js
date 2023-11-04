const { Task } = require('../models/tasks');

const createTask = async (req, res) => {
    try {
        const task = req.body;
        if(task.name.length <= 4){
            res.status(400).json({error: 'A descrição da tarefa deve ter no minimo 5 caracteres'})
        }
        await Task.create(task);
        res.status(201).json();
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
}
module.exports = {
    createTask,
}