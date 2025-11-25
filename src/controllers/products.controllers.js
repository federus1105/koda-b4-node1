const productModel = require('../models/products.models');

function getListProduct(req, res) {
    const productsList = productModel.getAllproducts();
    res.status(200).json({
        success: true,
        message: 'Products retrieved successfully',
        results: productsList
    });
}

function getProductById(req, res) {
    const productId = req.params.id;
    const product = productModel.getProductById(productId);
    if (product) {
        res.status(200).json({
            success: true,
            message: 'Product retrieved successfully',
            results: product
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'Product not found'
        });
    }
}

module.exports = {getListProduct, getProductById};