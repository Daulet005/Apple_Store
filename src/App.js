import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutContactPage';
import GalleryPage from './pages/GalleryPage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

import products from './data/products';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingIndex = cartItems.findIndex(item => item.id === product.id);
        if (existingIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingIndex] = { ...updatedCartItems[existingIndex], quantity: updatedCartItems[existingIndex].quantity + 1 };
            setCartItems(updatedCartItems);
        } else {
            setCartItems(prevItems => [...prevItems, { ...product, hidden: false, quantity: 1 }]);
        }
    };

    const removeFromCart = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <Router>
            <div className="App">
                <Header cartItemCount={cartItems.filter(item => !item.hidden).length} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route
                        path="/cart"
                        element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />}
                    />
                    <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
//emailjs.send('FrontEnd', 'FrontEnd', templateParams, 'j9GjAO6-ZR3h_5jvV') await emailjs.send('Front', 'template_b2qpfrn', templateParams, 'j9GjAO6-ZR3h_5jvV');