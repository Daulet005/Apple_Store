import React from 'react';
import Slideshow from '../components/Slideshow'; // изменение пути к Slideshow
import { Link } from 'react-router-dom';
import styles from '../styles/HomePage.module.css';

function HomePage() {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>Welcome to Apple Store</h1>
                <p>Ознакомьтесь с нашими новейшими продуктами и инновациями.</p>
            </div>
            <div className={styles.slideshowContainer}>
                <Slideshow />
            </div>

            <div className={styles.features}>
                <div className={styles.feature}>
                    <h2>Широкий ассортимент продукции</h2>
                    <p>
                        Откройте для себя широкий спектр продуктов Apple, включая iPhone, iPad, MacBook и другие.</p>
                </div>
                <div className={styles.feature}>
                    <h2>Исключительный сервис</h2>
                    <p>Испытайте исключительное обслуживание клиентов благодаря нашему опытному персоналу и преданной команде поддержки.</p>
                </div>
                <div className={styles.feature}>
                    <h2>Быстрая доставка</h2>
                    <p>
                        Воспользуйтесь быстрыми и надежными вариантами доставки, гарантируя, что ваши продукты Apple будут доставлены вам в кратчайшие сроки.</p>
                </div>
            </div>

            <hr className={styles.divider}/>

            <div className={styles.productInfo}>
                <div className={styles.product}>
                    <img
                        src="https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/2400x1600/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/19206380/akrales_190913_3666_0391.jpg"
                        alt="iPhone"
                    />
                    <h2>iPhone</h2>
                    <p>iPhone – это флагманская линейка смартфонов, разработанных и произведенных компанией Apple. Они предлагают множество инновационных функций и высокое качество сборки.</p>
                </div>
                <div className={styles.product}>
                    <img src="https://wylsa.com/wp-content/uploads/2017/06/Apple-iPad-Pro-10.5-14.jpg" alt="iPad" />
                    <h2>iPad</h2>
                    <p>iPad – это линейка планшетных компьютеров, созданных и разработанных компанией Apple. Они предлагают мощные процессоры, качественный дисплей и множество доступных приложений.</p>
                </div>
                <div className={styles.product}>
                    <img src="https://consomac.fr/images/news/test-macbook-2017-header.jpg" alt="MacBook" />
                    <h2>MacBook</h2>
                    <p>MacBook – это линейка ноутбуков, выпускаемых компанией Apple. Они отличаются высокой производительностью, стильным дизайном и удобством использования.</p>
                </div>
            </div>
            <hr className={styles.divider} />
            <div className={styles.productInfo}>
                <div className={styles.product}>
                    <img
                        src="https://trashbox.ru/files/954682_dfb9e9/fundam-1444.jpg"
                        alt="iPhone"
                    />
                    <h2>Процессор</h2>
                    <p>В iPhone и iPad используются мощные процессоры, разработанные специально для мобильных устройств. Эти процессоры, такие как серия A-чипов, обеспечивают быструю и плавную работу приложений, обработку графики и выполнение других задач. Они также оптимизированы для энергоэффективности, что позволяет устройствам работать дольше от одной зарядки.</p>
                </div>
                <div className={styles.product}>
                    <img src="https://lavkaremonta.ru/images/news/2020-07/f9e0dc60c1.jpg" alt="iPad" />
                    <h2>Материалы и отделка</h2>
                    <p>Apple использует высококачественные материалы, такие как алюминий, стекло и нержавеющая сталь, чтобы обеспечить прочность и эстетическое удовольствие. Отделка устройств часто бывает матовой или глянцевой, что придает им элегантный внешний вид.</p>
                </div>
                <div className={styles.product}>
                    <img src="https://itcrumbs.ru/wp-content/uploads/2018/05/servisnyj-tsentr-apple.jpg" alt="MacBook" />
                    <h2>Качество сборки</h2>
                    <p>Многие пользователи отмечают высокое качество сборки устройств Apple. Они ценят прочные материалы и внимание к деталям, которые делают устройства долговечными и надежными.</p>
                </div>
            </div>

            <Link to="/products" className={styles.ctaButton}>Explore Products</Link>

        </div>
    );
}

export default HomePage;



