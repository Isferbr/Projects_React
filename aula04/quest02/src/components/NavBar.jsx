// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className = "navbar">
            <ul className = "nav-list">
                <li><Link className = "nav-link" to="/">Home</Link></li>
                <li><Link className = "nav-link" to="/about">About</Link></li>
                <li><Link className = "nav-link" to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;