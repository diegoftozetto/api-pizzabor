require("../models/Client");
const mongoose = require("mongoose");
const Client = mongoose.model("clients");

class ClientController {
  async post(req, res) {
    if (!_validateInput()) {
      res.status(400).send("Falha ao processar requisição. Parâmetros Inválidos.");
    }

    const client = new Client(req.body);
    try {
      await client.save();
      res.status(201).send(client);
    } catch (error) {
      res.status(500).send(err.message);
    }
  }

  _validateInput() {
    if (Object.keys(req.body).length === 0) {
      return false;
    }

    var flag = true;
    for (key in req.body) {
      if (key != "complement") {
        if (key == "number" && !Number.isInteger(req.body[key])) {
          return false;
        }
        if (!req.body[key] || typeof req.body[key] == undefined || req.body[key] == null) {
          return false;
        }
      }
    }

    return true;
  }

  async get(req, res) {
    try {
      const clients = await Client.find().sort({ name: 'asc' });
      res.status(200).send(clients);
    } catch (error) {
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
