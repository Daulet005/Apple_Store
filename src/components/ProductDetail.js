import React, { useState } from 'react';
import products from '../data/products';
import './ProductDetailsPage.css';

function ProductDetail({ productId, addToCart }) {
    const [addedToCart, setAddedToCart] = useState(false);
    const product = products.find((p) => p.id === parseInt(productId));

    const handleAddToCart = () => {
        addToCart(product);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);  // Скрыть уведомление через 2 секунды
    };

    return (
        <div className="product-details-container">
            <div className="product-image-container">
                <img className="product-image" src={product.image} alt={product.name} />
            </div>
            <div className="product-info-container">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <h3>Характеристики</h3>
                <ul className="specifications-list">
                    {Object.entries(product.specs).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key}:</strong> {value}
                        </li>
                    ))}
                </ul>
                <button onClick={handleAddToCart}>Добавить в корзину</button>
                {addedToCart && <p className="added-to-cart-notification">Добавлен товар!!!!!!</p>}
            </div>
        </div>
    );
}

export default ProductDetail;

