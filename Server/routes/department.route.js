const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/department.controller');

router.get('/department', departmentController.getDepartment);
router.post('/municipality', departmentController.getMunicipality);

module.exports = router;