import request from 'supertest';

import app from '../../src/app';
import connection from '../../src/database/index';

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'APAD',
      email: 'contato@apad.com',
      whatsapp: '62999999999',
      city: 'Rio de Janeiro',
      uf: 'RJ',
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
