const {Router} = require('express')
const { createTask } = require('./controller/taskController');

const routes = Router();

routes.post('/tasks', createTask);


module.exports = routes;