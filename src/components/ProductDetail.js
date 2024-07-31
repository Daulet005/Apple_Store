import React, { useState } from 'react';
import products from '../data/products';
import './ProductDetailsPage.css';

function ProductDetail({ productId, addToCart }) {
    const [addedToCart, setAddedToCart] = useState(false);
    const [reviewText, setReviewText] = useState('');
    const [reviews, setReviews] = useState([]);
    const product = products.find((p) => p.id === parseInt(productId));

    const handleAddToCart = () => {
        addToCart(product);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
    };

    const handleReviewSubmit = (event) => {
        event.preventDefault();
        const newReview = {
            text: reviewText,
            date: new Date().toLocaleDateString(),
        };
        setReviews([...reviews, newReview]);
        setReviewText('');
    };

    if (!product) {
        return <p>Товар не найден</p>;
    }

    return (
        <div className="product-details-container">
            <div className="product-info-container">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Цена: {product.price} ₸</p>
                <h3>Характеристики</h3>
                <ul className="specifications-list">
                    {Object.entries(product.specs).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key}:</strong> {value}
                        </li>
                    ))}
                </ul>
                <button onClick={handleAddToCart}>Добавить в корзину</button>
                {addedToCart && <p className="added-to-cart-notification">Товар добавлен в корзину!</p>}
            </div>
            <div className="product-image-container">
                <img className="product-image" src={product.image} alt={product.name} />
            </div>
            <div className="reviews-container">
                <h3>Отзывы</h3>
                <ul className="review-list">
                    {reviews.length === 0 && <p>Пока нет отзывов.</p>}
                    {reviews.map((review, index) => (
                        <li key={index} className="review-item">
                            <p>{review.text}</p>
                            <p className="review-date">Дата: {review.date}</p>
                        </li>
                    ))}
                </ul>
                <form onSubmit={handleReviewSubmit} className="add-review-form">
                    <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        placeholder="Напишите отзыв..."
                        required
                    />
                    <button type="submit">Оставить отзыв</button>
                </form>
            </div>
        </div>
    );
}

export default ProductDetail;
