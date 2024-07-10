import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';
import './CheckoutPage.css';

function CheckoutPage() {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [address, setAddress] = useState('');
    const [products, setProducts] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.products) {
            setProducts(location.state.products);
        }
    }, [location.state]);

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleDeliveryMethodChange = (event) => {
        setDeliveryMethod(event.target.value);
    };

    const handleNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setUserEmail(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const templateParams = {
            user_name: userName,
            user_email: userEmail,
            payment_method: paymentMethod,
            delivery_method: deliveryMethod,
            address: deliveryMethod === 'courier' ? address : 'Самовывоз',
            products: products.map(product => `${product.name} (${product.quantity} шт.)(${product.price} тг.)`).join(', ')
        };

        emailjs.send('FrontEnd', 'FrontEnd', templateParams, 'j9GjAO6-ZR3h_5jvV')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmitted(true);
            }, (error) => {
                console.log('FAILED...', error);
            });

        console.log('Форма отправлена', templateParams);
    };

    return (
        <div className="checkout-container">
            <h2>Оформление заказа</h2>
            {submitted && <p className="success-message">Заказ успешно оформлен!</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Имя</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Электронная почта</label>
                    <input
                        type="email"
                        value={userEmail}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Метод оплаты</label>
                    <select value={paymentMethod} onChange={handlePaymentMethodChange} required>
                        <option value="">Выберите метод оплаты</option>
                        <option value="credit-card">Кредитная карта</option>
                        <option value="cash-on-delivery">Оплата при доставке</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Метод доставки</label>
                    <select value={deliveryMethod} onChange={handleDeliveryMethodChange} required>
                        <option value="">Выберите метод доставки</option>
                        <option value="courier">Курьер</option>
                        <option value="self-pickup">Самовывоз</option>
                    </select>
                </div>
                {deliveryMethod === 'courier' && (
                    <div className="form-group">
                        <label>Адрес</label>
                        <input
                            type="text"
                            value={address}
                            onChange={handleAddressChange}
                            required
                        />
                    </div>
                )}
                <div className="form-group">
                    <label>Товары</label>
                    <p>{products.map(product => `${product.name} (${product.quantity} шт.)`).join(', ')}</p>
                </div>
                <button type="submit">Подтвердить заказ</button>
            </form>
        </div>
    );
}

export default CheckoutPage;
