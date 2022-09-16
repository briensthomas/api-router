import request from 'supertest';
import app from './app.js';

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('#PATCH testing should return a 404', async () => {
  const res = await request(app).patch('/api/v1/sauces');

  expect(res.status).toBe(404);
})

it('#GET /sauces returns an array of sauce objects', async () => {
 const res = await request(app).get('/api/v1/sauces');

 expect(res.status).toBe(200);
 expect.any(String);
});

it('#POST /sauces adds a new sauce object to the list', async () => {
  const newSauce = {
    name: 'Sambal Oelek',
    flavor: 'Spicy'
  };
  const res = await request(app).post('/api/v1/sauces').send(newSauce);

  expect(res.status).toBe(202);
});

it('#PUT /sauces returns 202', async () => {
  const res = await request(app).put('/api/v1/sauces');

  expect(res.status).toBe(202);
});

it('#DELETE /sauces should return a status 204', async () => {
  const res = await request.agent(app).delete('/api/v1/sauces');

  expect(res.status).toBe(204);
})