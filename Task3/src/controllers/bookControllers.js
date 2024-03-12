const BookService = require('../services/bookServices');

class BookControllers {
    createBook(req, res) {
        BookService.createBook(req.body);
        res.send(`Книга ${req.body.username} -> создана!`);
    }

    async getAllBook(req, res) {
        const result = await BookService.getBook();
        res.send(result.books);
    };

    async getBookId(req, res) {
        const result = await BookService.getBookId(parseInt(req.params.id));
        result ? res.send(result) : res.send("Книга по данному ID не найден!");
    }

    async updateBook(req, res) {
        await BookService.updateBook(req.body, parseInt(req.params.id))
            .then(() => res.send("Данные записаны успешно"))
            .catch(() => res.send("Книга не найдена"));
    }

    async deleteBook(req, res) {
        await BookService.deleteBook(parseInt(req.params.id))
            .then(() => res.send("Книга удалена"))
            .catch(() => res.send("Книга не найдена"));
    }

}

module.exports = new BookControllers();