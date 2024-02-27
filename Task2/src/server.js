const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.MY_PORT;
app.use(express.json())

const router = require('./routes');
app.use('/api', router)

// function logger(req, res, next) {
//     console.log(`Запрос на ${req.url}`)
//     next();
// }

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})