const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report.controller');

router.get('/products', reportController.products10);
router.get('/department', reportController.department10);
router.get('/municipality', reportController.municipality10);
router.get('/goodaction', reportController.goodAction5);
router.get('/category', reportController.category5);
router.get('/letter', reportController.letters);

module.exports = router;