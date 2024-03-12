const express = require('express');
const router = express.Router();
const BookControllers = require('../controllers/bookControllers');

router.route('/')
    .post(BookControllers.createBook)
    .get(BookControllers.getAllBook);

router.route('/:id')
    .get(BookControllers.getBookId)
    .put(BookControllers.updateBook)
    .delete(BookControllers.deleteBook);

module.exports = router;