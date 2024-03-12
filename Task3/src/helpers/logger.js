function logger(req, res, next){
    console.log(`Запрос на ${req.method}`);
    next();
}

module.exports = logger;