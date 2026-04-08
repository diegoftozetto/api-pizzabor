const request = require('supertest');

const app = require('@app');
const { StatusCodes } = require('http-status-codes');
const ClientService = require('@service/ClientService');

describe('ClientController', () => {
  describe('ClientController - Post', () => {
    const body = {
      'name': 'Teste Name',
      'email': 'teste@email.com',
      'phone': '(41)99090-99089',
      'cep': '80230-000'
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
    });
  });

  describe('ClientController - Get', () => {
    test('should return all clients when the connection with the database occurs correctly', async () => {
      const reponseDataExpected = [
        {
          '_id': '633320a79f59e30a7cb58b57',
          'name': 'Test Name',
          'email': 'test@email.com',
          'phone': '(41)99090-9908',
          'cep': '80230-000',
          'logradouro': 'Rua Teste',
          'bairro': 'Bairro Teste',
          'localidade': 'Curitiba',
          'uf': 'PR',
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

  describe('ClientController - Delete', () => {
    test('should delete client when the connection with the database occurs correctly', async () => {
      const clientId = '532a43d204945946489f8285';

      const spyDeleteClient = jest.spyOn(ClientService, 'deleteClient').mockImplementation(() => {});

      const response = await request(app).delete(`/api/clients/${clientId}`);

      expect(spyDeleteClient).toHaveBeenCalledTimes(1);
      expect(response.status).toBe(StatusCodes.NO_CONTENT);
      spyDeleteClient.mockRestore();
    });

    test('should return internal server error when unexpected error occurs while deleting client', async () => {
      const clientId = '532a43d204945946489f8285';
      const error = {
        message: 'There was an error deleting client.'
      };

      const spyDeleteClient = jest.spyOn(ClientService, 'deleteClient').mockRejectedValue(error);

      const response = await request(app).delete(`/api/clients/${clientId}`);

      expect(spyDeleteClient).toHaveBeenCalledTimes(1);
      expect(response.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
      expect(response.text).toEqual(error.message);
      spyDeleteClient.mockRestore();
    });
  });
});
