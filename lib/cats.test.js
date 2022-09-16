import request from 'supertest';
import app from './app.js';

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('#PATCH testing should return a 404', async () => {
  const res = await request(app).patch('/api/v1/cats');

  expect(res.status).toBe(404);
})

it('#GET /cats returns an array of cat objects', async () => {
 const res = await request(app).get('/api/v1/cats');

 expect(res.status).toBe(200);
 expect.any(String);
});

it('#POST /cats adds a new cat object to the list', async () => {
  const newCat = {
    name: 'Sansa',
    codeName: 'Sansa'
  };
  const res = await request(app).post('/api/v1/cats').send(newCat);

  expect(res.status).toBe(202);
});

it('#PUT /cats returns 202', async () => {
  const res = await request(app).put('/api/v1/cats');

  expect(res.status).toBe(202);
});

it('#DELETE /cats should return a status 204', async () => {
  const res = await request.agent(app).delete('/api/v1/cats');

  expect(res.status).toBe(204);
})