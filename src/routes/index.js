const express = require('express');
const router = express.Router();

const product = require("./product");
const client = require("./client");

router.get('/', (req, res) => res.send('Sample Node API Version1'));

router.use("/products", product);
router.use("/clients", client);

module.exports = router;