require('dotenv').config();
const supertest = require('supertest');

const req = supertest(`http://localhost:${process.env.PORT || 8080}`);

test('should respond on port 8080', async () => {
    const res = await req.get('/');
    expect(res.status).toBe(200);
});