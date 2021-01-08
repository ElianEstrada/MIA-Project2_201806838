const express = require('express');
const router = express.Router();
const loadController = require('../controllers/load.controller');

router.post('/', loadController.load);

module.exports = router;