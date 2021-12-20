require("../models/Client");
const mongoose = require("mongoose");
const Client = mongoose.model("clients");

class ClientController {
  post(req, res) {
    if (Object.keys(req.body).length === 0) {
      res.status(400).json({ "message": "Falha ao processar requisição. Parâmetros Inválidos." });
    } else {
      var flag = true;
      for (key in req.body) {
        if (key != "complement") {
          if (key == "number" && !Number.isInteger(req.body[key])) {
            flag = false;
          }

          if (!req.body[key] || typeof req.body[key] == undefined || req.body[key] == null) {
            flag = false;
          }
        }
      }

      if (!flag) {
        res.status(400).json({ "message": "Falha ao processar requisição. Parâmetros Inválidos." });
      }
      else {
        new Client({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          cep: req.body.cep,
          address: req.body.address,
          number: req.body.number,
          complement: req.body.complement
        }).save().then(() => {
          res.status(201).json({ "message": "Cliente adicionado com sucesso." });
        }).catch(() => {
          res.status(500).json({ "message": "Falha ao processar requisição. Erro ao adicionar cliente no Database." });
        });
      }
    }
  }

  get(req, res) {
    Client.find().sort({ name: 'asc' }).then((clients) => {
      res.status(200).json(clients);
    }).catch(() => {
      res.status(500).json({ "message": "Falha ao processar requisição. Erro ao buscar cliente no Database." });
    });
  }

  delete(req, res) {
    Client.deleteOne({ _id: req.params.id }).then(() => {
      res.status(200).json({ "message": "Cliente removido com sucesso." });
    }).catch(() => {
      res.status(500).json({ "message": "Falha ao processar requisição. Erro ao remover cliente no Database." });
    });
  }
}

module.exports = new ClientController();
