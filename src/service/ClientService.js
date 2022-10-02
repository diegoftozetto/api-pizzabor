require("../models/Client");
const mongoose = require("mongoose");
const Client = mongoose.model("clients");
const axios = require('axios').default;
const CepDTO = require('../dtos/CepDTO')

class ClientService {
  async createClient(body) {
    try {
      const data = await this.searchViaCep(body.cep);

      const client = new Client({ ...body, ...data });
      console.info('Salvando cliente no banco.', client)
      return await client.save();
    } catch (error) {
      console.error(`Erro ao salvar cliente - email: ${body.email}`, error.message);
      throw error;
    }
  }

  async searchViaCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
      console.log(`Iniciando busca pelo CEP: ${cep}`);
      const response = await axios.get(url);
      console.log(`Busca pelo CEP: ${cep} finalizada - Dados: ${JSON.stringify(response.data)}`)
      return new CepDTO(response.data);
    } catch (error) {
      console.error(`Ocorreu um erro ao buscar CEP: ${cep} ViaCEP`);
      throw error;
    }
  }

  async listAllClients() {
    try {
      console.info('Listando todos os clientes.');
      return await Client.find().sort({ name: 'asc' });
    } catch (error) {
      console.error('Erro ao listar todos os clientes.', error);
      throw error;
    }
  }

  async deleteClient(id) {
    try {
      console.info(`Deletando cliente - _id: ${id}.`);
      await Client.deleteOne({ _id: id });
    } catch (error) {
      console.error(`Erro ao deletar cliente - _id: ${id}.`, error);
      throw error;
    }
  }
}

module.exports = new ClientService();
