import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header({ cartItemCount }) {
    return (
        <header className={styles.header}>
            <h1>Apple Store</h1>
            <nav className={styles.nav}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/gallery">Товары</Link>
                <Link to="/contact">Контакты</Link>
                <Link to="/cart">Корзина ({cartItemCount})</Link>
            </nav>
        </header>
    );
}

export default Header;
