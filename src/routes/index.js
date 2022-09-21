const express = require('express');
const router = express.Router();

const product = require("./product");
const clientRoutes = require("./clientRoutes");

router.get('/', (req, res) => res.send('Sample Node API Version1'));

router.use("/products", product);
router.use("/clients", clientRoutes);

module.exports = router;