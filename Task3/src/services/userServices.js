const FileHelper = require('../helpers/fileHelper');
class UserService {

    getUser() {
        return FileHelper.readFile('data.json');
    }

    async createUser(body) {
        const myData = await FileHelper.readFile('data.json');
        myData.users.push(body);
        await FileHelper.writeFile('data.json', myData);
    }

    async getUserId(userId) {
        const result = await FileHelper.readFile('data.json');
        return result.users.find((item) => item.id === userId);
    }

    async updateUser(data, userId) {
        const myData = await FileHelper.readFile('data.json');
        const index = myData.users.findIndex((item) => item.id === userId);
        if (index === -1) {
            return Promise.reject();
        }
        myData.users[index] = { id: userId, ...data };
        await FileHelper.writeFile('data.json', myData);
    }

    async deleteUser(userId) {
        const myData = await FileHelper.readFile('data.json');
        const index = myData.users.findIndex((item) => item.id === userId);
        if (index === -1) {
            return Promise.reject();
        }
        myData.users.splice(index, 1);
        await FileHelper.writeFile('data.json', myData);
    }
}

module.exports = new UserService();