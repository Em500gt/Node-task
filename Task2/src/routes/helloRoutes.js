const express = require('express');
const router = express.Router();
const startControllers = require('../controllers/startControllers');

router.get('/', startControllers.getHello);

module.exports = router;