const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Настройка Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dauletzamiat@gmail.com', // замените на ваш email
            pass: 'Daulet14', // замените на ваш пароль
        },
    });

    const mailOptions = {
        from: email,
        to: 'dauletzamiat@gmail.com',
        subject: `Новое сообщение от ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Сообщение успешно отправлено' });
    } catch (error) {
        console.error('Ошибка при отправке email:', error);
        res.status(500).json({ message: 'Произошла ошибка при отправке сообщения' });
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
