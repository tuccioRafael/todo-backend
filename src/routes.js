const {Router} = require('express')
const { createTask, getAllTasks } = require('./controller/taskController');

const routes = Router();

routes.post('/tasks', createTask);
routes.get('/tasks', getAllTasks);


module.exports = routes;