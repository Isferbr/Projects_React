// src/components/Header.jsx
import React from 'react';
import NavBar from './NavBar';
import './Header.css';


function Header({ title = "Meu Site" }) {
    return (
        <header>
            <h1>{title}</h1>
            <NavBar />
        </header>
    );
}

export default Header;