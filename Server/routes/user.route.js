const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');


router.get('/', userController.getUsers);
router.get('/userType', userController.getUserType);
router.get('/genders', userController.getGender);
router.get('/parents', userController.getParents);
router.post('/registry', userController.addUsers);
router.put('/modify/:code', userController.modify);
router.delete('/delete/:code', userController.delete);

module.exports = router