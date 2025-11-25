const express = require('express');
const productControllers = require('../controllers/products.controllers');
const router = express.Router();

router.get('/', productControllers.getListProduct);
router.get('/:id', productControllers.getProductById);

module.exports = router