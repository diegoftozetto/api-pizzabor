require("../models/Product");
const mongoose = require("mongoose");
const Product = mongoose.model("products");

class ProductService {
  async createProduct(body) {
    try {
      const product = new Product(body);
      return await product.save();
    } catch(error) {
      console.error(`Erro ao salvar produto - name: ${body.name}.`, error);
      throw error;
    }
  };

  async listAllProducts() {
    try {
      return await Product.find().sort({ categorie: 'desc', name: 'asc' });
    } catch(error) {
      console.error('Erro ao listar todos os produtos.', error);
      throw error;
    }
  };

  async deleteProduct(id) {
    try {
      console.info(`Deletando produto - _id: ${id}.`);
      await Product.deleteOne({ _id: id });
    } catch(error) {
      console.error(`Erro ao deletar produto - _id: ${id}.`, error);
      throw error;
    }
  };
}

module.exports = new ProductService();
