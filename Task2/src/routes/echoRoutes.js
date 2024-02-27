const express = require('express');
const router = express.Router();
const startControllers = require('../controllers/startControllers');

router.post('/', startControllers.getEcho);

module.exports = router;