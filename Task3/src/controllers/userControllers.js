const UserService = require('../services/userServices');

class UserControllers {
    createUser(req, res) {
        UserService.createUser(req.body);
        res.send(`Пользователь ${req.body.username} -> создан!`);
    }

    async getAllUser(req, res) {
        const result = await UserService.getUser();
        res.send(result.users);
    };

    async getUserId(req, res) {
        const result = await UserService.getUserId(parseInt(req.params.id));
        result ? res.send(result) : res.send("Пользователь по данному ID не найден!");
    }

    async updateUser(req, res) {
        await UserService.updateUser(req.body, parseInt(req.params.id))
            .then(() => res.send("Данные записаны успешно"))
            .catch(() => res.send("Пользователь не найден"));
    }

    async deleteUser(req, res) {
        await UserService.deleteUser(parseInt(req.params.id))
            .then(() => res.send("Пользователь удален"))
            .catch(() => res.send("Пользователь не найден"));
    }

}

module.exports = new UserControllers();