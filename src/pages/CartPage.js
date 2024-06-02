import React from 'react';
import './CartPage.css';

function CartPage({ cartItems, hideItemInCart }) {
    return (
        <div className="cart-container">
            <h2>Корзина</h2>
            {cartItems.every(item => item.hidden) ? (
                <p>У вас нет выбранного товара</p>
            ) : (
                <div>
                    <ul className="cart-list">
                        {cartItems.map((item, index) => (
                            !item.hidden && (
                                <li key={index} className="cart-item">
                                    <img src={item.image} alt={item.name} className="cart-item-image" />
                                    <div className="cart-item-info">
                                        <h3>{item.name}</h3>
                                        <p>${item.price}</p>
                                    </div>
                                    <button
                                        className="remove-button"
                                        onClick={() => hideItemInCart(index)}
                                    >
                                        Удалить
                                    </button>
                                </li>
                            )
                        ))}
                    </ul>
                    <p className="cart-total">
                        Total: ${cartItems.reduce((total, item) => item.hidden ? total : total + item.price, 0).toFixed(2)}
                    </p>
                </div>
            )}
        </div>
    );
}

export default CartPage;
