const ProductService = require('@service/ProductService');

class ProductController {
  async post(req, res) {
    try {
      const clientCreated = await ProductService.createProduct(req.body);
      res.status(201).send(clientCreated);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async get(req, res) {
    try {
      const allClients = await ProductService.listAllProducts();
      res.status(200).send(allClients);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  async delete(req, res) {
    try {
      await ProductService.deleteProduct(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = new ProductController();
