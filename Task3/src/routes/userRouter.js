const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/userControllers');

const Validation = require('../helpers/validation');

router.get('/hello', Validation.helloUser(), UserControllers.hello);

router.route('/')
    .post(Validation.validData(), UserControllers.createUser)
    .get(Validation.validHeader(), UserControllers.getAllUser);

router.route('/:id')
    .get(Validation.validID(), UserControllers.getUserId)
    .put(Validation.validID(), Validation.validData(), UserControllers.updateUser)
    .delete(Validation.validID(), UserControllers.deleteUser);

module.exports = router;