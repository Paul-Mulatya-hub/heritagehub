import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="hero">
                <h1>Discover Timeless Elegance with Our Curated Selection of Handmade Treasures</h1>
                <div className="cta-buttons">
                    <Link to="/store" className="btn">Shop Now</Link>
                    <Link to="/signup" className="btn">Become a Seller</Link>
                </div>
            </div>
            <div className="featured-products">
                <h2>Featured Products</h2>
                {/* Add a component or code to display featured products */}
            </div>
            <div className="benefits">
                <h2>Why Choose Heritage Hub?</h2>
                <div className="benefit">
                    <h3>Wide Selection</h3>
                    <p>Curated selection of unique handmade items.</p>
                </div>
                <div className="benefit">
                    <h3>Secure Payments</h3>
                    <p>Safe and secure payment options including Mpesa and PayPal.</p>
                </div>
                <div className="benefit">
                    <h3>Community</h3>
                    <p>Join a vibrant community of sellers and buyers.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
