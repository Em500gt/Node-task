class startControllers {
    getHello(req, res) {
        res.send("Привет, Redev!");
    }

    getEcho(req, res) {
        const {message} = req.body;
        res.send(message);
    }
}

module.exports = new startControllers();