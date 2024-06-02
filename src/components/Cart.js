import React from 'react';

function Cart({ cartItems, addToCart }) {
    return (
        <div>
            <h2>Корзина</h2>
            {cartItems.length === 0 ? (
                <p>Нету</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>{item.name} - ${item.price}</li>
                        ))}
                    </ul>
                    <p>Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
                </div>
            )}
        </div>
    );
}

export default Cart;
