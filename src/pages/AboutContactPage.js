import React, { useState } from 'react';
import styles from '../styles/AboutPage.module.css';
import mapScreenshot from '../assets/map_screenshot.jpg.png';
import creator2 from '../assets/Dake.jpg';
import emailjs from 'emailjs-com';

function AboutContactPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [serverError, setServerError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!form.name) newErrors.name = 'Имя обязательно';
        if (!form.email) {
            newErrors.email = 'Email обязателен';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'Некорректный email';
        }
        if (!form.message) newErrors.message = 'Сообщение обязательно';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            try {
                const templateParams = {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message
                };

                await emailjs.send('Front', 'template_b2qpfrn', templateParams, 'j9GjAO6-ZR3h_5jvV');

                console.log('Form data sent successfully');
                setSubmitted(true);
                setForm({ name: '', email: '', message: '' });
            } catch (error) {
                console.error('Error sending form data:', error);
                setServerError('Произошла ошибка при отправке данных.');
            }
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.aboutUs}>
                <h2 className={styles.aboutUsTitle}>О нас</h2>
                <div className={styles.aboutUsContent}>
                    <p className={styles.aboutUsDescription}>
                        Мы открыли этот магазин с одной простой целью: сделать жизнь любителей техники Apple проще и приятнее. В начале нашего пути мы собрались вместе с идеей не только продавать устройства, но и создать место, где каждый клиент будет чувствовать себя как дома. Мы стремились предложить не просто товары, а исключительный сервис и поддержку, которые сделают ваш опыт использования продукции Apple незабываемым. Именно так родилась наша идея — создать магазин, где каждый клиент будет настоящим гостем, а каждая покупка станет приятным и запоминающимся событием.
                    </p>
                    <div className={styles.creatorsPhotos}>
                        <div className={styles.creatorInfo}>
                            <img src={creator2} alt="Фото создателя 2" className={styles.creatorPhoto}/>
                            <h3 className={styles.creatorName}>Жамият Даулет</h3>
                            <p className={styles.creatorBio}>Владелец магазина Apple Store</p>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className={styles.subtitle}>Наши контакты</h3>
            <ul className={styles.contactList}>
                <li>Телефон: +7 (771) 580 74 15</li>
                <li>Email: dauletzamiat@gmail.com</li>
                <li>Instagram: <a href="https://instagram.com/applestore" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}> @applestore</a></li>
            </ul>

            <h3 className={styles.subtitle}>Наше местоположение</h3>
            <div className={styles.mapContainer}>
                <img src={mapScreenshot} alt="Местоположение Apple Store"/>
            </div>
            <p className={styles.address}>Адрес: г.Алматы, улица Жандосова 55</p>

            <h3 className={styles.subtitle}>Свяжитесь с нами</h3>
            <div className={styles.contactPage}>
                {submitted && <p className={styles.successMessage}>Успешно отправлено!</p>}
                {serverError && <p className={styles.error}>{serverError}</p>}
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Имя:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className={styles.error}>{errors.name}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className={styles.error}>{errors.email}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Сообщение:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                        />
                        {errors.message && <p className={styles.error}>{errors.message}</p>}
                    </div>
                    <button type="submit">Отправить</button>
                </form>
            </div>
            <br/>
            <br/>
        </div>
    );
}

export default AboutContactPage;
