// src/App.js

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
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

import products from './data/products';
import buyers from './data/buyers'; // Импортируем данные пользователей

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState('');

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

    const handleLogin = (username) => {
        setIsAuthenticated(true);
        setUserName(username);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUserName('');
    };

    return (
        <Router>
            <div className="App">
                <Header
                    cartItemCount={cartItems.filter(item => !item.hidden).length}
                    isAuthenticated={isAuthenticated}
                    userName={userName}
                    onLogout={handleLogout}
                />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route
                        path="/product/:id"
                        element={<ProductPage addToCart={addToCart} />}
                    />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route
                        path="/cart"
                        element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />}
                    />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route
                        path="/login"
                        element={<LoginPage onLogin={handleLogin} />}
                    />
                    <Route path="/signup" element={<SignUpPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
