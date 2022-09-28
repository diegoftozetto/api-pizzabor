const { StatusCodes } = require('http-status-codes');
const ClientService = require('@service/ClientService');

class ClientController {
  async post(req, res) {
    try {
      const clientCreated = await ClientService.createClient(req.body);
      res.status(StatusCodes.CREATED).send(clientCreated);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
    }
  }

  async get(req, res) {
    try {
      const allClients = await ClientService.listAllClients();
      res.status(StatusCodes.OK).send(allClients);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
    }
  }

  async delete(req, res) {
    try {
      await ClientService.deleteClient(req.params.id);
      res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
    }
  }
}

module.exports = new ClientController();
