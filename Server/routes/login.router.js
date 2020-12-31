const express = require('express');
const router = express.Router();
const loginConroller = require('../controllers/login.controller');

router.post('/login', loginConroller.login);

module.exports = router;