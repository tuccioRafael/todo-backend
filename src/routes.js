const {Router} = require('express')
const { createTask, getAllTasks, getOneTaskById, updateTask } = require('./controller/taskController');

const routes = Router();

routes.post('/tasks', createTask);
routes.get('/tasks', getAllTasks);
routes.get('/tasks/:id', getOneTaskById);
routes.put('/tasks/:id', updateTask);


module.exports = routes;