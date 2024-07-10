import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

function CartPage({ cartItems, removeFromCart, clearCart }) {
    const navigate = useNavigate();

    const total = cartItems.reduce((total, item) => {
        return total + parseFloat(item.price) * item.quantity;
    }, 0);

    const handleRemoveItem = (index) => {
        removeFromCart(index);
    };

    const handleBuyItems = () => {
        clearCart();
        navigate('/checkout', { state: { products: cartItems } }); // Передаем товары в состоянии маршрута
    };

    if (cartItems.length === 0) {
        return (
            <div className="cart-container">
                <h2>Корзина</h2>
                <p>У вас нет выбранных товаров</p>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h2>Корзина</h2>
            <div>
                <ul className="cart-list">
                    {cartItems.map((item, index) => (
                        <li key={index} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-info">
                                <h3>{item.name}</h3>
                                <p>{item.price} ₸</p>
                                <p>Количество: {item.quantity}</p>
                            </div>
                            <button className="remove-button" onClick={() => handleRemoveItem(index)}>
                                Удалить
                            </button>
                        </li>
                    ))}
                </ul>
                <p className="cart-total">
                    Итого: {total.toFixed(2)} ₸
                </p>
                <button className="buy-button" onClick={handleBuyItems}>
                    Купить
                </button>
            </div>
        </div>
    );
}

export default CartPage;
