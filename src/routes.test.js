require('dotenv').config();
const supertest = require('supertest');

test('Deve inserir uma task com sucesso', async () => {
    const req = supertest(`http://localhost:${process.env.PORT}/api/tasks`);
    const res = await req.post(`/`).send({ name: 'criar uma tarefa' });
    expect(res.status).toBe(201);
});

test('Deve lançar um erro 400 caso o nome tenha menos do que 5 caracteres', async () => {
    const req = supertest(`http://localhost:${process.env.PORT}/api/tasks`);
    const name = 'cri'
    const res = await req.post(`/`).send({ name });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('A descrição da tarefa deve ter no minimo 5 caracteres');
});


test('Deve responder com 200 no endoint de listar', async () => {
    const req = supertest(`http://localhost:${process.env.PORT}/api/tasks`);
    const res = await req.get(`/`);
    expect(res.status).toBe(200);
})


test('Deve retornar uma task pesquisando por id ', async () => {
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

test('Deve alterar uma tarefa existente ', async () => {
    const req = supertest(`http://localhost:${process.env.PORT}/api/tasks`);
    const res = await req.get('/');
    const taskId = res.body[0]._id;
    const name = `alterado em ${Date.now()}`
    const response = await req.put(`/${taskId}`).send({ name });
    expect(response.status).toBe(200);
    const newResponse = await req.get(`/${taskId}`);
    expect(newResponse.body._id).toBe(taskId);
    expect(newResponse.body.name).toBe(name);
});

test('Deve lançar um erro 400 caso o nome tenha menos de 5 caracteres', async () => {
    const req = supertest(`http://localhost:${process.env.PORT}/api/tasks`);
    const res = await req.get('/');
    const taskId = res.body[0]._id;
    const name = "abc"
    const response = await req.put(`/${taskId}`).send({ name });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('A descrição da tarefa deve ter no minimo 5 caracteres');
});

test('Deve deletar uma task', async () => {
    const req = supertest(`http://localhost:${process.env.PORT}/api/tasks`);
    const res = await req.get('/');
    const taskId = res.body[0]._id;
    const response = await req.delete(`/${taskId}`);
    expect(response.status).toBe(200);
});

test('Deve concluir uma tarefa', async () => {
    const req = supertest(`http://localhost:${process.env.PORT}/api/tasks`)
    const getAllResponse = await req.get('/');
    const taskId = getAllResponse.body[0]._id;
    const completeTaskResponse = await req.patch(`/${taskId}`).send({done: true});
    expect(completeTaskResponse.status).toBe(200);
    const getOneTaskResponse = await req.get(`/${taskId}`);
    expect(getOneTaskResponse.body.done).toBe(true); 
})






