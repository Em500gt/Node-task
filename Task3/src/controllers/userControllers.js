const UserService = require('../services/userServices');
const { validationResult } = require('express-validator');
class UserControllers {

    async createUser(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        await UserService.createUser(req.body);
        res.send(`Пользователь ${req.body.username} -> создан!`);
    }

    async getAllUser(req, res) {
        const errors = validationResult(req);
        console.log(errors)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const result = await UserService.getUser();
        res.send(result.users);
    };

    async getUserId(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const result = await UserService.getUserId(parseInt(req.params.id));
        result ? res.send(result) : res.send("Пользователь по данному ID не найден!");
    }

    async updateUser(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        await UserService.updateUser(req.body, parseInt(req.params.id))
            .then(() => res.send("Данные записаны успешно"))
            .catch(() => res.send("Пользователь не найден"));
    }

    async deleteUser(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        await UserService.deleteUser(parseInt(req.params.id))
            .then(() => res.send("Пользователь удален"))
            .catch(() => res.send("Пользователь не найден"));
    }

    hello(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        res.send(`Hello, ${req.query.person}!`);
    }

}

module.exports = new UserControllers();