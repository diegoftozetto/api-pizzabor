require("../models/Client");
const mongoose = require("mongoose");
const Client = mongoose.model("clients");

class ClientController {
  async post(req, res) {
    try {
      const client = new Client(req.body);
      await client.save();
      res.status(201).send(client);
    } catch (error) {
      res.status(500).send(err.message);
    }
  }

  async get(req, res) {
    try {
      const clients = await Client.find().sort({ name: 'asc' });
      res.status(200).send(clients);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async delete(req, res) {
    try {
      await Client.deleteOne({ _id: req.params.id });
      res.sendStatus(204);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = new ClientController();
