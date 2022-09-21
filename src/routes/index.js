const express = require('express');
const router = express.Router();

const productRoutes = require("./productRoutes");
const clientRoutes = require("./clientRoutes");

router.get('/', (req, res) => res.send('API PizzaBor'));

router.use("/products", productRoutes);
router.use("/clients", clientRoutes);

module.exports = router;
