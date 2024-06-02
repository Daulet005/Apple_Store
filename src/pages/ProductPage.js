import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';

function ProductPage({ addToCart }) {
    const { id } = useParams();
    return <ProductDetail productId={id} addToCart={addToCart} />;
}

export default ProductPage;


