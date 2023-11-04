const express = require('express');
const router = express.Router();
const appController = require('../app/controllers/AppController');

router.get('/', appController.index);

module.exports = router;
