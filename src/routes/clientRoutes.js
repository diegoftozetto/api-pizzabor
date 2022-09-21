const express = require("express");
const router = express.Router();

const { celebrate, errors } = require('celebrate');

const ClientController = require("@controller/ClientController");
const clientJoiSchema = require("@schemas/clientJoiSchema");

router.get('/', ClientController.get);
router.post('/', celebrate(clientJoiSchema), ClientController.post);
router.delete('/', ClientController.delete);
router.use(errors());

module.exports = router;