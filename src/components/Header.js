// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header({ cartItemCount, isAuthenticated, userName, onLogout }) {
    return (
        <header className={styles.header}>
            <h1>Apple Store</h1>
            <nav className={styles.nav}>
                <Link to="/">Главная</Link>
                <Link to="/about">О нас</Link>
                <Link to="/gallery">Товары</Link>
                <Link to="/contact">Ремонт</Link>
                <Link to="/cart">Корзина ({cartItemCount})</Link>
            </nav>
            <div className={styles.auth}>
                {isAuthenticated ? (
                    <div className={styles.loggedIn}>
                        <span>{userName}!</span>
                        <button onClick={onLogout}>Выйти</button>
                    </div>
                ) : (
                    <div className={styles.loggedOut}>
                        <Link to="/login">Войти</Link>
                        <Link to="/signup">Регистрация</Link>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
