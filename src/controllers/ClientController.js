const ClientService = require('@service/ClientService');

class ClientController {
  async post(req, res) {
    try {
      const clientCreated = await ClientService.createClient(req.body);
      res.status(201).send(clientCreated);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async get(req, res) {
    try {
      const allClients = await ClientService.listAllClients();
      res.status(200).send(allClients);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async delete(req, res) {
    try {
      await ClientService.deleteClient(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = new ClientController();
