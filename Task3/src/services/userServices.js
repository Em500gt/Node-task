const FileHelper = require('../helpers/fileHelper');
class UserService {

    getUser() {
        return FileHelper.readFile('data.json');
    }

    async createUser(body) {
        const myData = await FileHelper.readFile('data.json');
        const result = myData;
        result.users.push(body);
        await FileHelper.writeFile('data.json', result);
    }

    async getUserId(userId){
        const result = await FileHelper.readFile('data.json');
        return result.users.find((item) => item.id === userId);
    }

    async updateUser(data, userId) {
        const myData = await FileHelper.readFile('data.json');
        
        // const index = this.#user.findIndex((item) => item.id === userId);

        // if (!this.#user[index]) {
        //     return `Пользователь не найден!`;
        // }

        // this.#user[index] = {id: userId, ...data};
        // return `Информация о пользователе обновлена!`;
    }
}

module.exports = new UserService();