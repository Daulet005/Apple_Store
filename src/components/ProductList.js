import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import './ProductList.css';

function ProductList() {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <Link to={`/product/${product.id}`} className="product-link">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-info">
                            <h2 className="product-name">{product.name}</h2>
                            <p className="product-price">${product.price}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ProductList;



