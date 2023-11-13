import React, { useState, useEffect } from 'react';
import './AppleStyle.css';
import applelogo from '../images/applelogo.png';
import iphoneImage from '../images/Iphone15pro.png';
import iphoneProMaxImage from '../images/Iphone15promax.png';
import iphone15 from '../images/Iphone15.png';

const Apple = () => {
    const [opacity, setOpacity] = useState(1);
    const [showProDetails, setShowProDetails] = useState(false);
    const [showProMaxDetails, setShowProMaxDetails] = useState(false);
    const [showIphone15Details, setShowIphone15Details] = useState(false);

    const handleScroll = () => {
        const newOpacity = Math.max(0.5, 1 - window.scrollY / 500);
        setOpacity(newOpacity);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const renderDescription = (description) => {
        return description.split('\n').map((line, index) => (
            <p key={index} className="iphone-description-line">{line}</p>
        ));
    };

    const iphoneProDescription = "Black Titanium, White Titanium, Blue Titanium, Natural Titanium\nTitanium design Ceramic Shield front Textured matte glass back.\n\n Capacity:\n128GB\n256GB\n 512GB\n1TB \nSize and Weight:\n Weight: 6.60 ounces (187 grams)\nHeight:5.77 inches(146.6 mm)\nWidth:2.78 inches (70.6 mm)\nDepth:0.32 inch(8.25 mm)";
    const iphoneProMaxDescription = "Black Titanium, White Titanium, Blue Titanium, Natural Titanium\nTitanium design Ceramic Shield front Textured matte glass back.\n\n Capacity:\n256GB\n 512GB\n1TB \nSize and Weight:\n Weight: 7.81 ounces (221 grams)\nHeight:6.29 inches(159.9 mm)\nWidth:3.02 inches (76.7 mm)\nDepth:0.32 inch(8.25 mm)";
    const iphone15Description = "Black, Blue, Green, Yellow, Pink \nAluminum design Ceramic Shield front Color-infused glass back.\n Capacity:\n128GB \n256GB\n 512GB\nSize and Weight:\n Weight: 6.02 ounces (171 grams)\nHeight:5.81 inches(147.6 mm)\nWidth:2.82 inches (71.6 mm)\nDepth:0.31 inch(7.80 mm)";

    return (
        <div className="apple-page">
            <div className="logo-container" style={{ opacity }}>
                <img src={applelogo} alt="Apple Logo" className="apple-logo" />
            </div>
            <div className="products-container">
                <div className="iphone15pro-container">
                    <img src={iphoneImage} alt="iPhone 15 Pro" className="iphone15pro-image" />
                    <h2>iPhone 15 Pro</h2>
                    <button onClick={() => setShowProDetails(!showProDetails)} className="details-button">
                        {showProDetails ? 'Less Details' : 'More Details'}
                    </button>
                    {showProDetails && (
                        <div className="iphone15pro-description">
                            {renderDescription(iphoneProDescription)}
                        </div>
                    )}
                </div>
                <div className="iphone15-container">
                    <img src={iphone15} alt="iPhone 15" className="iphone15-image" />
                    <h2>iPhone 15</h2>
                    <button onClick={() => setShowIphone15Details(!showIphone15Details)} className="details-button">
                        {showIphone15Details ? 'Less Details' : 'More Details'}
                    </button>
                    {showIphone15Details && (
                        <div className="iphone15-description">
                            {renderDescription(iphone15Description)}
                        </div>
                    )}
                </div>
                <div className="iphone15promax-container">
                    <img src={iphoneProMaxImage} alt="iPhone 15 Pro Max" className="iphone15promax-image" />
                    <h2>iPhone 15 Pro Max</h2>
                    <button onClick={() => setShowProMaxDetails(!showProMaxDetails)} className="details-button">
                        {showProMaxDetails ? 'Less Details' : 'More Details'}
                    </button>
                    {showProMaxDetails && (
                        <div className="iphone15promax-description">
                            {renderDescription(iphoneProMaxDescription)}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Apple;
