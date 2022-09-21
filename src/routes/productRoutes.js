const express = require("express");
const router = express.Router();

const { celebrate, errors } = require('celebrate');

const ProductController = require("@controller/ProductController");
const productJoiSchema = require("../schemas/productJoiSchema");

router.get('/', ProductController.get);
router.post('/', celebrate(productJoiSchema), ProductController.post);
router.delete('/:id', ProductController.delete);
router.use(errors());

module.exports = router;
