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

    async getUserId(req, res){
        const result = await UserService.getUserId(parseInt(req.params.id));
        result ? res.send(result) : res.send("Пользователь по данному ID не найден!")
    }

    async updateUser(req, res){
        res.send(UserService.updateUser(req.body, parseInt(req.params.id)));
    }
}

module.exports = new UserControllers();