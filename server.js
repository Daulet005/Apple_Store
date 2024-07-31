// server.js
const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const cors = require('cors');

// Настройки Express
const app = express();
app.use(express.json());
app.use(cors());

// Настройки подключения к базе данных PostgreSQL
const pool = new Pool({
    user: 'your_username',        // Замените на ваше имя пользователя
    host: 'localhost',
    database: 'your_database',    // Замените на название вашей базы данных
    password: 'your_password',    // Замените на ваш пароль
    port: 5432,
});

// Маршрут для регистрации пользователей
app.post('/buyers/registration',
    // Валидация входных данных
    body('username').notEmpty().withMessage('Имя пользователя обязательно'),
    body('password').isLength({ min: 6 }).withMessage('Пароль должен быть не менее 6 символов'),
    body('lastName').notEmpty().withMessage('Фамилия обязательна'),
    body('firstName').notEmpty().withMessage('Имя обязательно'),
    body('email').isEmail().withMessage('Некорректный email'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, password, lastName, firstName, email } = req.body;

        try {
            // Проверяем, существует ли уже такой пользователь
            const userCheckQuery = 'SELECT * FROM users WHERE username = $1';
            const { rows } = await pool.query(userCheckQuery, [username]);
            if (rows.length > 0) {
                return res.status(400).send('Пользователь с таким именем уже существует');
            }

            // Хэшируем пароль
            const hashedPassword = await bcrypt.hash(password, 10);

            // Создаем нового пользователя
            const insertQuery = 'INSERT INTO users (username, password, lastName, firstName, email) VALUES ($1, $2, $3, $4, $5) RETURNING *';
            const result = await pool.query(insertQuery, [username, hashedPassword, lastName, firstName, email]);

            res.status(201).send('Пользователь успешно зарегистрирован');
        } catch (err) {
            console.error(err);
            res.status(500).send('Ошибка при регистрации пользователя');
        }
    }
);

// Запуск сервера
app.listen(5000, () => console.log('Server running on http://localhost:5000'));
