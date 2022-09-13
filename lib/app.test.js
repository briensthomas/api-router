import request from 'supertest';
import app from './app.js';

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('#GET /candies returns an array of candy objects', async () => {
 const res = await request(app).get('/api/v1/candies');

 expect(res.status).toBe(200);
 expect.any(String);
});