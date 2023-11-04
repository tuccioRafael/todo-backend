require('dotenv').config();
const { response } = require('express');
const supertest = require('supertest');

test('should insert a task successfully', async () => {
    const req = supertest(`http://localhost:${process.env.PORT}/api/tasks`);
    const res = await req.post(`/`).send({name: 'criar uma tarefa'});
    expect(res.status).toBe(201);
});

test('should respond with error if name length is less than 5', async () => {
    const req = supertest(`http://localhost:${process.env.PORT}/api/tasks`);
    const name = 'cri'
    const res = await req.post(`/`).send({name});
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('A descrição da tarefa deve ter no minimo 5 caracteres');
});


test('should respond with 200', async () => {
    const req = supertest(`http://localhost:${process.env.PORT}/api/tasks`);
    const res = await req.get(`/`);
    expect(res.status).toBe(200);
})

test('should respond with 200', async () => {
    const req = supertest(`http://localhost:${process.env.PORT}/api/tasks`);
    const res = await req.get(`/`)
    expect(res.status).toBe(200);
})

test('it lists on task by id ', async () => {
    const req = supertest(`http://localhost:${process.env.PORT}/api/tasks`);
    const res = await req.get('/');
    const taskId = res.body[0]._id;
    const response = await req.get(`/${taskId}`);
    expect(response.body._id).toBe(taskId);
});


test('Deve jogar um erro caso o id não exista ', async () => {
    const taskId = "6546a9be9bc3a024709dde24";
    const request = supertest(`http://localhost:${process.env.PORT}/api/tasks`);
    const response = await request.get(`/${taskId}`);
    expect(response.status).toBe(404);
});

test('Deve alterar uma task existente ', async () => {
    const req = supertest(`http://localhost:${process.env.PORT}/api/tasks`);
    const res = await req.get('/');
    const taskId = res.body[0]._id;
    const name = `alterado em ${Date.now()}`
    const response = await req.put(`/${taskId}`).send({name});
    expect(response.status).toBe(200);
    const newResponse = await req.get(`/${taskId}`);
    expect(newResponse.body._id).toBe(taskId);
    expect(newResponse.body.name).toBe(name);
});

test('deve deletar uma task', async () => {
    const req = supertest(`http://localhost:${process.env.PORT}/api/tasks`);
    const res = await req.get('/');
    const taskId = res.body[0]._id;
    const response = await req.delete(`/${taskId}`);
    expect(response.status).toBe(200);
    const newResponse = await req.get(`${taskId}`);
    expect(newResponse.status).toBe(404);
});




