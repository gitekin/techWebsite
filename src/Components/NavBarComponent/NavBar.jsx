import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './NavBarStyle.css';

function NavBar() {
    return (
        <nav className="NavBar">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/brands">Brand</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
                <li><Link to="/myprofile">My Profile</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
