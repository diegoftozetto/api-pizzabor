const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  cep: {
    type: String,
    require: true
  },
  logradouro: {
    type: String
  },
  complemento: {
    type: String
  },
  bairro: {
    type: String
  },
  localidade: {
    type: String
  },
  uf: {
    type: String
  }
});

mongoose.model("clients", ClientSchema);
