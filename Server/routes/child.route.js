const express = require('express');
const router = express.Router();
const childController = require('../controllers/child.controller');


router.get('/', childController.getChild);
router.post('/registry', childController.addChild);
router.delete('/delete/:code', childController.deleteChild);
router.put('/modify/:code', childController.modifyChild);

module.exports = router