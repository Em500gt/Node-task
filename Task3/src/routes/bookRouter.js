const express = require('express');
const router = express.Router();
const BookControllers = require('../controllers/bookControllers');
const Validation = require('../helpers/validation');

router.route('/')
    .post(Validation.validateDataBook(), BookControllers.createBook)
    .get(Validation.validHeader(), BookControllers.getAllBook);

router.route('/:id')
    .get(Validation.validID(), BookControllers.getBookId)
    .put(Validation.validID(), Validation.validateDataBook(), BookControllers.updateBook)
    .delete(Validation.validID(), BookControllers.deleteBook);

module.exports = router;