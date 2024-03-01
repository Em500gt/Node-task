const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.MY_PORT;
app.use(express.json())

const router = require('./routes');
const logger = require('./helpers/logger');
app.use('/api', logger, router)
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})