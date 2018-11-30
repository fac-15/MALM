const test = require('tape');
const supertest = require('supertest');
const router = require('./router');

test('GET Home route returns a status code of 200', (t) => {
  supertest(router)
    .get('/') // this specifies a GET request, use .post() otherwise
    .expect(200)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, 'Should return 200');
      t.end();
    });
});

test('GET Elephants route returns a status code of 404', (t) => {
  supertest(router)
    .get('/elephants')
    .expect(404)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
