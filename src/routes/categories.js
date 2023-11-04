const express = require('express');
const router = express.Router();
const categoryController = require('../app/controllers/CategoryController');

router.get('/create', categoryController.create);
router.post('/create', categoryController.store);
router.get('/:id/delete', categoryController.delete);
router.get('/', categoryController.index);

module.exports = router;
