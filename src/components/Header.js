import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header({ cartItemCount }) {
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
        </header>
    );
}

export default Header;
