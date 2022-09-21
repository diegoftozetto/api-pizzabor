require("../models/Client");
const mongoose = require("mongoose");
const Client = mongoose.model("clients");

class ClientService {
  async createClient(body) {
    try {
      const client = new Client(body);
      console.info('Salvando cliente no banco.', client)
      return await client.save();
    } catch(error) {
      console.error(`Erro ao salvar cliente - email: ${body.email}`, error);
      throw error;
    }
  }

  async listAllClients() {
    try {
      console.info('Listando todos os clientes.');
      return await Client.find().sort({ name: 'asc' });
    } catch(error) {
      console.error('Erro ao listar todos os clientes.', error);
      throw error;
    }
  }

  async deleteClient(id) {
    try {
      console.info(`Deletando cliente - _id: ${id}.`);
      await Client.deleteOne({ _id: id });
    } catch(error) {
      console.error(`Erro ao deletar cliente - _id: ${id}.`, error);
      throw error;
    }
  }
}

module.exports = new ClientService();
