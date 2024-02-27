const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/userControllers');

router.route('/')
    .post(UserControllers.createUser)
    .get(UserControllers.getUser)

router.route('/:id')
    .get(UserControllers.getUserId)
    .put(UserControllers.editUser)
    .patch(UserControllers.editPassword)
    .delete(UserControllers.deleteUser);

module.exports = router;