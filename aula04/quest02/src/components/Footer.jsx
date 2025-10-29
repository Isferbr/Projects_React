// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

function Footer({ author = "Ismael Fernandes"}) {
    const year = new Date().getFullYear();

    return (
        <footer>&copy; {year} {author}</footer>
    );
}

export default Footer; 