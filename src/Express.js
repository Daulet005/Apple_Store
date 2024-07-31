// server.js (или index.js)

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Массив для хранения пользователей
let buyers = [];

// Маршрут для регистрации пользователей
app.post('/buyers/registration', (req, res) => {
    const newUser = req.body;
    buyers.push(newUser); // Добавляем нового пользователя в массив
    res.status(201).send('User registered');
});

// Маршрут для проверки доступности сервера
app.get('/status', (req, res) => {
    res.send('Server is running');
});

// Статические файлы для React (если нужно)
app.use(express.static(path.join(__dirname, 'client/build')));

// Запуск сервера на порту 5000
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
