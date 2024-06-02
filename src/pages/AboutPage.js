import React from 'react';
import styles from '../styles/AboutPage.module.css'; // Импортируем стили
import mapScreenshot from '../assets/map_screenshot.jpg.png';

function AboutPage() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>О нас</h2>
            <p className={styles.description}>
                Добро пожаловать в Apple Store! Мы - официальный реселлер продукции Apple, предоставляющий широкий ассортимент устройств от iPhone до MacBook. Наша миссия - предоставить клиентам новейшие технологии Apple с высоким уровнем сервиса.
            </p>

            <h3 className={styles.subtitle}>Наши контакты</h3>
            <ul className={styles.contactList}>
                <li>Телефон: +7085133003</li>
                <li>Email: Zhanserik@applestore.com</li>
                <li>Instagram: <a href="https://instagram.com/applestore" target="_blank" rel="noopener noreferrer">@applestore</a></li>
            </ul>

            <h3 className={styles.subtitle}>Наше местоположение</h3>
            <div className={styles.mapContainer}>
                <img src={mapScreenshot} alt="Местоположение Apple Store" />
            </div>
        </div>
    );
}

export default AboutPage;