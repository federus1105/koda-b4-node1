const { Router } = require("express");
const authRoutes = require('./auth.router');
const productRoutes = require('./products.router');


const router = Router();

router.use('/auth', authRoutes);
router.use('/product', productRoutes);

module.exports = router;