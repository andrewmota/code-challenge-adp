const request = require('supertest');
const app = require('../src/app.js');

describe('Testing all the routes', () => {
  it('should test GET /businesses with valid limit parameter', async () => {
    const { status } = await request(app).get(`/businesses?limit=${5}`);
    expect(status).toEqual(200);
  });

  it('should test GET /businesses with no limit parameter', async () => {
    const { status } = await request(app).get(`/businesses`);
    expect(status).toEqual(200);
  });

  it('should test GET /businesses with invalid limit parameter', async () => {
    const { status } = await request(app).get(`/businesses?limit=${'a'}`);
    expect(status).toEqual(400);
  });

  it('should test GET /reviews with valid limit parameter', async () => {
    const { body } = await request(app).get(`/businesses?limit=${1}`);

    if (body && body.length > 0) {
      const [business] = body;
      const { status } = await request(app).get(`/reviews/${business.id}`);
      expect(status).toEqual(200);
    } else expect(true).toEqual(false);
  });

  it('should test GET /reviews with invalid business id', async () => {
    const { status } = await request(app).get(`/reviews/not_found`);
    expect(status).toEqual(400);
  });
});
