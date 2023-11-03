const express = require('express');
const router = express.Router();
const appController = require('../app/controllers/AppController');

router.use('/', appController.index);

module.exports = router;
