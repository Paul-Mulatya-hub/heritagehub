import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="contact-info">
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@heritagehub.com</p>
                <p>Address: 123 Heritage Street, Craftsville</p>
            </div>
            <div className="social-media">
                <a href="https://facebook.com">Facebook</a>
                <a href="https://twitter.com">Twitter</a>
                <a href="https://instagram.com">Instagram</a>
            </div>
            <div className="copyright">
                <p>&copy; 2024 Heritage Hub. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
