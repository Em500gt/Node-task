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
        const index = this.#user.findIndex((item) => item.id === userId);

        if (!this.#user[index]) {
            return `Пользователь не найден!`;
        }

        this.#user[index] = {id: userId, ...data};
        return `Информация о пользователе обновлена!`;
    }

    editPassword(data, userId) {
        const index = this.#user.findIndex((item) => item.id === userId);

        if (!this.#user[index]) {
            return `Пользователь не найден!`;
        }

        this.#user[index].password = data.password;
        return `Пароль пользователя обновлен!`
    }

    deleteUser(userId){
        const userIndex = this.#user.findIndex((item) => item.id === userId);

        if (userIndex === -1) {
            return "Пользователь не найден!";
        }

        this.#user.splice(userIndex, 1);
        return `Пользователь был удален`;
    }

}

module.exports = new UserServices();