const request = require('supertest');

const app = require(`@src/app`);
const mongoose = require('mongoose');
const { StatusCodes } = require('http-status-codes');
const ClientService = require('@service/ClientService');

beforeEach((done) => {
  mongoose.connect('mongodb://localhost/db-pizzabor',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done());
});

afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done())
  });
});

describe('ClientController - Post', () => {
  const body = {
    'name': 'Teste Name',
    'email': 'teste@email.com',
    'phone': '(41)99090-99089',
    'cep': '8023100',
    'address': 'Address',
    'number': '400',
    'complement': 'Complement'
  };

  test('should add client when the connection with the database occurs correctly', async () => {
    const reponseData = {
      '_id': '532a43d204945946489f8285',
      ...body,
      '__v': 0
    };

    const spyCreateClient = jest.spyOn(ClientService, 'createClient').mockImplementation(() => reponseData);

    const response = await request(app).post('/api/clients').send(body);

    expect(spyCreateClient).toHaveBeenCalledTimes(1);
    expect(response.status).toBe(StatusCodes.CREATED);
    expect(response.body).toEqual(reponseData);
    spyCreateClient.mockRestore();
  });

  test('Should return internal server error when unexpected error occurs while saving client', async () => {
    const error = {
      message: 'There was an error saving client.'
    };

    const spyCreateClient = jest.spyOn(ClientService, 'createClient').mockRejectedValue(error);

    const response = await request(app).post('/api/clients').send(body);

    expect(spyCreateClient).toHaveBeenCalledTimes(1);
    expect(response.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(response.text).toEqual(error.message);
    spyCreateClient.mockRestore();
  })
});

describe('ClientController - Get', () => {
  test('should return all clients when the connection with the database occurs correctly', async () => {
    const reponseDataExpected = [
      {
        '_id': '633320a79f59e30a7cb58b57',
        'url': 'URL',
        'name': 'Test Name',
        'categorie': 'Teste Categorie',
        'price': '10',
        'description': 'Test Description',
        '__v': 0
      }
    ];

    const spyListAllClients = jest.spyOn(ClientService, 'listAllClients').mockImplementation(() => reponseDataExpected);

    const response = await request(app).get('/api/clients');

    expect(spyListAllClients).toHaveBeenCalledTimes(1);
    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body).toEqual(reponseDataExpected);
    spyListAllClients.mockRestore();
  });
});

