const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/userControllers');

router.route('/')
    .post(UserControllers.createUser)
    .get(UserControllers.getAllUser);

router.route('/:id')
    .get(UserControllers.getUserId)
    .put(UserControllers.updateUser)
    .delete(UserControllers.deleteUser);

module.exports = router;