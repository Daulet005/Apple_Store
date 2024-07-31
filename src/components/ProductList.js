import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import './ProductList.css';

function ProductList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);

        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredProducts(filteredProducts);
    };

    return (
        <div className="product-list-container">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Поиск продуктов..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="search-input"
                />
            </div>
            <div className="product-list">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-item">
                        <Link to={`/product/${product.id}`} className="product-link">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <div className="product-info">
                                <h2 className="product-name">{product.name}</h2>
                                <p className="product-price">₸{product.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
