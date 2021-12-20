const express = require("express");
const router = express.Router();

const ClientController = require("@controller/client");

router.get('/', ClientController.get);
router.post('/', ClientController.post);
router.delete('/', ClientController.delete);

module.exports = router;