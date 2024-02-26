const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.MY_PORT;
app.use(express.json())

const users = [];

app.get('/api/hello', (req, res) => {
    res.send("Привет, Redev!");
})

app.post('/api/echo', (req, res) => {
    const message = req.body.message;
    res.json({ echo: message });
})

app.post('/api/users', (req, res) => {
    const { id, username, email, password } = req.body;
    users.push({ id, username, email, password });
    res.send(`Пользователь ${username} -> создан!`)
})

app.get('/api/users', (req, res) => {
    res.send(users);
})

app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const result = users.find((item) => item.id === userId);
    result ? res.send(result) : res.send("Пользователь по данному ID не найден!")
})

app.put('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { username, email, password } = req.body;
    const user = users.find((user) => user.id === userId);

    if (!user) {
        return res.send("Пользователь не найден!");
    }

    user.username = username || user.username;
    user.email = email || user.email;
    user.password = password || user.password;
    res.send("Информация о пользователе обновлена!");

})

app.patch('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((user) => user.id === userId);

    if (!user) {
        return res.send("Пользователь не найден!");
    }

    user.password = req.body.password || user.password;
    res.send(`Пароль пользователя обновлен!`);
})

app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
        return res.send("Пользователь не найден!");
    }

    users.splice(userIndex, 1)
    res.send("Пользователь был удален");
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})