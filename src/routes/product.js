const express = require("express");
const router = express.Router();

const ProductController = require("@controller/product");

router.get('/', ProductController.get);
router.post('/', ProductController.post);
router.delete('/:id', ProductController.delete);

module.exports = router;