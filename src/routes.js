const {Router} = require('express')
const { createTask, getAllTasks, getOneTaskById } = require('./controller/taskController');

const routes = Router();

routes.post('/tasks', createTask);
routes.get('/tasks', getAllTasks);
routes.get('/tasks/:id', getOneTaskById);


module.exports = routes;