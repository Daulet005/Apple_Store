import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, { ...product, hidden: false }]);
    };

    const hideItemInCart = (index) => {
        setCartItems((prevItems) =>
            prevItems.map((item, i) => (i === index ? { ...item, hidden: true } : item))
        );
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
                    <Route path="/cart" element={<CartPage cartItems={cartItems} hideItemInCart={hideItemInCart} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

