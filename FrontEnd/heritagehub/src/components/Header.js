import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/">Heritage Hub</Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/store">Store</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/learning">Learning</Link></li>
                    <li><Link to="/community">Community</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </nav>
            <div className="cart">
                <Link to="/cart">Cart</Link>
            </div>
        </header>
    );
};

export default Header;
