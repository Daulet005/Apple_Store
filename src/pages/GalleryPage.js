import React from 'react';
import ProductList from '../components/ProductList';
import './GalleryPage.css';

function GalleryPage() {
    return (
        <div className="gallery-container">
            <h2 className="gallery-heading">Товары</h2>
            <div className="product-table">
                <ProductList />
            </div>
        </div>
    );
}

export default GalleryPage;
