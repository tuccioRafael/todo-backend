const {Router} = require('express')
const { createTask, getAllTasks, getOneTaskById, updateTask, deleteTask, completeTask } = require('./controller/taskController');

const routes = Router();

routes.post('/tasks', createTask);
routes.get('/tasks', getAllTasks);
routes.get('/tasks/:id', getOneTaskById);
routes.put('/tasks/:id', updateTask);
routes.delete('/tasks/:id', deleteTask);
routes.patch('/tasks/:id', completeTask);


module.exports = routes;