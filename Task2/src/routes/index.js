const express = require('express');

const router = express.Router();
const helloRoutes = require('./helloRoutes');
const echoRoutes = require('./echoRoutes');

router.use('/hello', helloRoutes);
router.use('/echo', echoRoutes);

module.exports = router;