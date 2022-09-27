const mongoose = require("mongoose");

const CONNECTION_STRING = process.env.MONGO_DB;

const connect = async () => {
  return mongoose
    .connect(CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
      console.log('Conectado com o banco de dados.')
      return result;
    })
    .catch((error) => {
      console.error('Erro ao conectar com o banco de dados.', error);
    });
};

module.exports = connect;
