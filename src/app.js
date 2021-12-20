////////////////////////////////////////////////////////////
// Carregando Módulos                                     //
////////////////////////////////////////////////////////////

//Dependências
const express = require("express");
const bodyParse = require("body-parser");
const cors = require('cors');

const routes = require("./routes");

const app = express();

app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

app.use(cors());

app.use('/api', routes);

module.exports = app;