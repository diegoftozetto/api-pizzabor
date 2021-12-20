require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` });
require('module-alias/register');
const mongoose = require("mongoose");
const config = require("@config");
const boot = require("@service/boot");

if (config.db.connectionString) {
  mongoose.connect(config.db.connectionString, boot);
} else {
  console.log("Erro ao conectar com o mongoDB.");
}
