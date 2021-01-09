const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

router.get('/', postController.getPost);
router.get('/comentary/:code', postController.getCommentary);
router.post('/addCommentary', postController.comment);

module.exports = router;