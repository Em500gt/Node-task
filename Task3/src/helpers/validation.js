const { body, query, param, header } = require('express-validator');

class Validation {

    validData() {
        return [
            body('email')
                .isEmail().withMessage('Email не валидный'),
            body('username')
                .isAlpha()
                .trim()
                .withMessage('Имя должно состоять только из букв'),
            body('password')
                .isInt()
                .isLength({ min: 6 })
                .withMessage('Пароль должен состоять только из цифр, и быть не менеее 6 символов'),
        ];
    }

    validID() {
        return [param("id").isInt().withMessage('Форма ID нарушена. Должно быть целое число!')];
    }

    helloUser() {
        return [query('person').notEmpty().withMessage('Отсутствует параметр')];
    }

    validHeader() {
        return [header("authorization").custom((value) => value == "YES")];

    }

    validateDataBook() {
        return body('pages').isInt();
    }
}

module.exports = new Validation();