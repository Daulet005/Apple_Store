import React from 'react';
import './ContactPage.css'; // Создайте файл стилей для этой страницы

function RepairServicePage() {
    const serviceCenters = [
        {
            id: 1,
            name: 'Apple Service Center 1',
            location: 'Жандосова 55, Город Алматы',
            phone: '+77715807415',
            hours: 'Пн-Сб: 10:00 - 18:00'
        },
        {
            id: 2,
            name: 'Apple Service Center 2',
            location: 'Абая 48, Город Шымкент',
            phone: '+77777395522',
            hours: 'Пн-Пт: 12:00 - 20:00'
        },
        // Добавьте другие сервисные центры по мере необходимости
    ];

    return (
        <div className="repair-service-page">
            <h2>Ремонт и Обслуживание устройств Apple</h2>

            <div className="service-info">
                <h3>Услуги Ремонта и Замены</h3>
                <p>
                    Мы предлагаем широкий спектр услуг по ремонту и замене компонентов для всех устройств Apple,
                    включая iPhone, iPad, MacBook, Apple Watch и другие.
                </p>
                <p>
                    Наши сертифицированные специалисты используют только оригинальные компоненты Apple,
                    чтобы обеспечить качество и долговечность вашего устройства.
                </p>
            </div>

            <div className="warranty-info">
                <h3>Гарантийные Условия</h3>
                <p>
                    Все ремонтные работы выполняются в соответствии с гарантийными условиями Apple.
                    Подробности о гарантии можно узнать у наших специалистов в сервисном центре.
                </p>
            </div>

            <div className="authorized-centers">
                <h3>Авторизованные Сервисные Центры</h3>
                <ul>
                    {serviceCenters.map(center => (
                        <li key={center.id}>
                            <h4>{center.name}</h4>
                            <p><strong>Адрес:</strong> {center.location}</p>
                            <p><strong>Телефон:</strong> {center.phone}</p>
                            <p><strong>Часы работы:</strong> {center.hours}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="repair-instructions">
                <h3>Инструкции по Отправке на Ремонт</h3>
                <p>
                    Если вы не можете посетить наш сервисный центр лично, вы можете отправить устройство
                    на ремонт. Следуйте инструкциям на нашем веб-сайте для завершения процесса.
                </p>
            </div>

            <div className="care-tips">
                <h3>Советы по Уходу за Устройствами</h3>
                <p>
                    Следуйте простым советам по уходу за устройствами Apple, чтобы продлить их срок службы
                    и предотвратить повреждения.
                </p>
            </div>

            <div className="faq-section">
                <h3>Часто Задаваемые Вопросы (FAQ)</h3>
                <p>
                    Здесь вы можете найти ответы на самые распространенные вопросы о ремонте и обслуживании
                    устройств Apple.
                </p>
            </div>

        </div>
    );
}

export default RepairServicePage;
