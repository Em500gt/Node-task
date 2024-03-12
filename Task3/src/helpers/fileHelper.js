const fs = require('fs');

class FileHelper {

    readFile(nameFile) {
        return new Promise((res, rej) => {
            fs.readFile(nameFile, 'utf-8', (err, data) => {
                if (err) {
                    console.error(err);
                    rej(err);
                }

                res(JSON.parse(data));
            })
        })
    }

    writeFile(nameFile, result) {
        return new Promise((res, rej) => {
            fs.writeFile(nameFile, JSON.stringify(result, undefined, 2), (err) => {
                if (err) {
                    console.error(err);
                    rej(err)
                }
            })
        })

    }
}

module.exports = new FileHelper();