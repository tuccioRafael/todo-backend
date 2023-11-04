require('dotenv').config();
const supertest = require('supertest');

const ROUTE = '/tasks';

test('should insert a task successfully', async () => {
    const req = supertest(`http://localhost:${process.env.PORT}/api/${ROUTE}`);
    const res = await req.post('/').send({name: 'criar uma tarefa'});
    expect(res.status).toBe(201);
});

test('should respond with error if name length is less than 5', async () => {
    const req = supertest(`http://localhost:${process.env.PORT}/api/tasks`);
    const name = 'abcd'
    const res = await req.post('/').send({name});
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('A descrição da tarefa deve ter no minimo 5 caracteres');
});