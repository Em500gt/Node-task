const FileHelper = require('../helpers/fileHelper');
class BookService {

    getBook() {
        return FileHelper.readFile('data.json');
    }

    async createBook(body) {
        const myData = await FileHelper.readFile('data.json');
        myData.books.push(body);
        await FileHelper.writeFile('data.json', myData);
    }

    async getBookId(bookId) {
        const result = await FileHelper.readFile('data.json');
        return result.books.find((item) => item.id === bookId);
    }

    async updateBook(data, bookId) {
        const myData = await FileHelper.readFile('data.json');
        const index = myData.books.findIndex((item) => item.id === bookId);
        if (index === -1) {
            return Promise.reject();
        }
        myData.books[index] = { id: bookId, ...data };
        await FileHelper.writeFile('data.json', myData);
    }

    async deleteBook(bookId) {
        const myData = await FileHelper.readFile('data.json');
        const index = myData.books.findIndex((item) => item.id === bookId);
        if (index === -1) {
            return Promise.reject();
        }
        myData.books.splice(index, 1);
        await FileHelper.writeFile('data.json', myData);
    }
}

module.exports = new BookService();