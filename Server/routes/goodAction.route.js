const express = require('express');
const router = express.Router();
const goodActionController = require('../controllers/goodAction.controller');

router.get('/', goodActionController.show);
router.get('/show2/:code', goodActionController.show2);
router.get('/canes/:code', goodActionController.count);
router.post('/add', goodActionController.add);
router.post('/adddetail', goodActionController.addDetail);
router.put('/modify/:code', goodActionController.modify);
router.delete('/delete/:code', goodActionController.delete);

module.exports = router