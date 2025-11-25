const express = require('express');
const productControllers = require('../controllers/products.controllers');
const router = express.Router();
const upload = require('../libs/upload');

router.get('/', productControllers.getListProduct);
router.get('/:id', productControllers.getProductById);
router.delete('/:id', productControllers.deleteproducbyId);
router.post('/:id/upload', upload.single('image'), productControllers.uploadProductImage);


module.exports = router