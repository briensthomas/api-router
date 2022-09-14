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

it('#POST /candies adds a new candy object to the list', async () => {
  const newCandy = {
    name: 'Kit Kat',
    flavor_profile: 'Chocolate, Wafer',
    sweetness: '4'
  };
  const res = await request(app).post('/api/v1/candies').send(newCandy);

  expect(res.status).toBe(202);
});

it('#PUT /candies returns 202', async () => {
  const res = await request(app).put('/api/v1/candies');

  expect(res.status).toBe(202);
});

it('#DELETE /candies should return a status 204', async () => {
  const res = await request.agent(app).delete('/api/v1/candies');

  expect(res.status).toBe(204);
})