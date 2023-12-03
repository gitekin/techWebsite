import React, { useState, useEffect } from 'react';
import './SamsungStyle.css';
import samsungLogo from '../images/samsunglogo.png';

const Samsung = () => {
    const [opacity, setOpacity] = useState(1);

    const handleScroll = () => {
        const newOpacity = Math.max(0.5, 1 - window.scrollY / 500);
        setOpacity(newOpacity);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="samsung-page">
            <div className="logo-container" style={{ opacity }}>
                <img src={samsungLogo} alt="Samsung Logo" className="samsung-logo" />
            </div>
        </div>
    );
};

export default Samsung;
