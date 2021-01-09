const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.get('/', productController.showAll);
router.get('/categorys', productController.getCategorys);
router.post('/add', productController.addProduct);
router.put('/modify/:code', productController.modify);
router.delete('/delete/:code', productController.delete);

module.exports = router;