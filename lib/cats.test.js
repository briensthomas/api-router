import request from 'supertest';
import app from './app.js';

it('#GET /cats returns an array of cat objects', async () => {
    const res = await request(app).get('/api/v1/cats');
   
    expect(res.status).toBe(200);
    expect.any(String);
   });