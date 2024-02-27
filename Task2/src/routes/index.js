const express = require('express');

const router = express.Router();
const logger = require('../helpers/logger');
const helloRoutes = require('./helloRoutes');
const echoRoutes = require('./echoRoutes');
const userRoutes = require('./userRoutes');

router.use('/hello', logger, helloRoutes);
router.use('/echo', logger, echoRoutes);
router.use('/users', logger, userRoutes);

module.exports = router;