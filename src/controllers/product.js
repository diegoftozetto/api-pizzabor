require("../models/Product");
const mongoose = require("mongoose");
const Product = mongoose.model("products");

class ProductController {
  get(req, res) {
    Product.find().sort({ categorie: 'desc', name: 'asc' }).then((products) => {
      res.status(200).json(products);
    }).catch(() => {
      res.status(500).json({ "message": "Falha ao processar requisição. Erro ao buscar produtos no Database." });
    });
  };

  //Adicionar Produto
  post(req, res) {
    if (Object.keys(req.body).length === 0) {
      res.status(400).json({ "message": "Falha ao processar requisição. Parâmetros Inválidos." });
    } else {
      var flag = true;
      for (key in req.body) {
        if (key != "url") {
          if (!req.body[key] || typeof req.body[key] == undefined || req.body[key] == null) {
            flag = false;
          }
        }
      }

      if (!flag) {
        res.status(400).json({ "message": "Falha ao processar requisição. Parâmetros Inválidos." });
      }
      else {
        new Product({
          url: req.body.url,
          name: req.body.name,
          categorie: req.body.categorie,
          price: req.body.price,
          description: req.body.description
        }).save().then(() => {
          res.status(201).json({ "message": "Produto adicionado com sucesso." });
        }).catch(() => {
          res.status(500).json({ "message": "Falha ao processar requisição. Erro ao adicionar produto no Database." });
        });
      }
    }
  };

  //Remover Produto
  delete(req, res) {
    Product.deleteOne({ _id: req.params.id }).then(() => {
      res.status(200).json({ "message": "Produto removido com sucesso." });
    }).catch(() => {
      res.status(500).json({ "message": "Falha ao processar requisição. Erro ao remover produto no Database." });
    });
  };
}

module.exports = new ProductController();