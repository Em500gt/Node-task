class startControllers {
    getHello(req, res) {
        res.send("Привет, Redev!");
    }

    getEcho(req, res) {
        const message = req.body.message;
        res.json({ echo: message });
    }
}

module.exports = new startControllers();