const UserServices = require('../services/userServices');

class UserControllers {
    createUser(req, res) {
        UserServices.createUser(req.body);
        res.send(`Пользователь ${req.body.username} -> создан!`)
    }

    getUser(req, res) {
        res.send(UserServices.getUser());
    }

    getUserId(req, res) {
        const result = UserServices.getUserId(parseInt(req.params.id))
        result ? res.send(result) : res.send("Пользователь по данному ID не найден!")
    }

    editUser(req, res) {
        res.send(UserServices.editUser(req.body, parseInt(req.params.id)));
    }

    editPassword(req, res) {
        res.send(UserServices.editPassword(req.body, parseInt(req.params.id)));
    }

    deleteUser(req, res) {
        // const userId = parseInt(req.params.id);
        // const userIndex = users.findIndex((user) => user.id === userId);

        // if (userIndex === -1) {
        //     return res.send("Пользователь не найден!");
        // }

        // users.splice(userIndex, 1)
        // res.send("Пользователь был удален");
        console.log('delete');
    }
}

module.exports = new UserControllers();