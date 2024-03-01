const express = require('express');

const router = express.Router();
const helloRoutes = require('./helloRoutes');
const echoRoutes = require('./echoRoutes');
const userRoutes = require('./userRoutes');

router.use('/hello', helloRoutes);
router.use('/echo', echoRoutes);
router.use('/users', userRoutes);

module.exports = router;