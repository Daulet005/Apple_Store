// SignUpPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/SignUpPage.module.css'; // Импортируем стили

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [lname, setLname] = useState('');
    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        // Создаем объект Buyer
        const buyer = {
            login: username,
            password: password,
            lname: lname,
            fname: fname,
            email: email
        };

        // Отправляем AJAX-запрос на сервер для регистрации нового пользователя
        registerUser(buyer);
    };

    const registerUser = (buyer) => {
        fetch("/buyers/registration", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(buyer)
        })
            .then(response => {
                if (response.status === 201) {
                    // Выводим сообщение о успешной регистрации
                    alert("Пользователь успешно зарегистрирован");
                    navigate('/login');
                } else {
                    // Выводим сообщение об ошибке регистрации
                    alert("Ошибка при регистрации пользователя");
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
                alert("Произошла ошибка при выполнении запроса");
            });
    };


    return (
        <div className={styles.container}>
            <div className={styles.registrationImage}>
                <img src="https://i.pinimg.com/originals/2c/38/41/2c38416c3c545b8f382acdafc582ae4f.jpg" alt="Registration Image" />
            </div>
            <form onSubmit={handleSignUp} className={styles.registrationForm}>
                <h2 className={styles.title}>Регистрация</h2>
                <input
                    type="text"
                    id="username"
                    placeholder="Имя пользователя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.input}
                    required
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                    required
                />
                <input
                    type="text"
                    id="lname"
                    placeholder="Фамилия"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    className={styles.input}
                    required
                />
                <input
                    type="text"
                    id="fname"
                    placeholder="Имя"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    className={styles.input}
                    required
                />
                <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                    required
                />
                <button type="submit" className={styles.submitButton}>Зарегистрироваться</button>
                <p id="registration-message" className={styles.registrationMessage}></p>
            </form>
        </div>
    );
};

export default SignUpPage;
