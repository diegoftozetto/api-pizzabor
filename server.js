require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` });
require('module-alias/register');
const mongooseConnect = require("@config/db/dbConfig");
const app = require('@app');

const PORT = process.env.PORT || 5000;

mongooseConnect().then(() => {
  app.listen(PORT, (error) => {
    if (error) {
      return console.error('erro ao iniciar app.');
    }
    console.log(`Rodando na porta ${PORT}`);
  });
})
