// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/LoginPage.module.css'; // Импортируем стили
import loginImage from '../assets/iphonee.jpg'; // Путь к вашему изображению для фотографии
import { authenticateUser } from '../components/auth'; // Импортируйте функцию проверки

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Проверка учетных данных
        if (authenticateUser(username, password)) {
            alert('Вход выполнен успешно!');
            onLogin(username); // Передайте только имя пользователя
            navigate('/'); // Переход на главную страницу после входа
        } else {
            setError('Неверное имя пользователя или пароль');
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.photoContainer}>
                <img className={styles.photo} src={loginImage} alt="Фото" />
            </div>
            <div className={styles.loginContainer}>
                <h2 className={styles.formTitle}>Вход</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <input
                            className={styles.inputField}
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Имя пользователя"
                            required
                        />
                    </div>
                    <div>
                        <input
                            className={styles.inputField}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Пароль"
                            required
                        />
                    </div>
                    {error && <p className={styles.error}>{error}</p>}
                    <button className={styles.submitButton} type="submit">
                        Войти
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
