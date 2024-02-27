class UserServices {
    #user = [];

    getUser() {
        return this.#user;
    }

    createUser(data) {
        this.#user.push(data);
    }

    getUserId(userId) {
        const result = this.#user.find((item) => item.id === userId);
        return result
    }

    editUser(data, userId) {
        const result = this.#user.find((item) => item.id === userId);

        if (!result) {
            return `Пользователь не найден!`;
        }

        result.username = data.username || result.username;
        result.email = data.email || result.email;
        result.password = data.password || result.password;
        return `Информация о пользователе обновлена!`;
    }

    editPassword(data, userId) {
        const result = this.#user.find((item) => item.id === userId);

        if (!result) {
            return `Пользователь не найден!`;
        }

        result.password = data.password || result.password;
        return `Пароль пользователя обновлен!`
    }


}

module.exports = new UserServices();