import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBarStyle.css"; // Import your CSS file

const NavBar = () => {
    return (
        <header className="NavBar">
            <nav className="menu-bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li> <Link to="/brands"> Brands </Link> </li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/profile">My Profile</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
