const express = require('express');
const router = express.Router();
const letterController = require('../controllers/letter.controller');

router.get('/:code', letterController.showLetters);
router.post('/addLetter', letterController.addLetter);

module.exports = router