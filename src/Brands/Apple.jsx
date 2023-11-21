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

    const handlePayment = () => {
        alert("Payment process would start here.");
    };

    const renderDescription = (description) => {
        return description.split('\n').map((line, index) => (
            <p key={index} className="iphone-description-line">{line}</p>
        ));
    };

    const phones = [
        {
            id: 'iphone15pro',
            image: iphoneImage,
            title: 'iPhone 15 Pro',
            description: "Black Titanium, White Titanium, Blue Titanium, Natural Titanium\nTitanium design Ceramic Shield front Textured matte glass back.\n\n Capacity:\n128GB\n256GB\n 512GB\n1TB \nSize and Weight:\n Weight: 6.60 ounces (187 grams)\nHeight:5.77 inches(146.6 mm)\nWidth:2.78 inches (70.6 mm)\nDepth:0.32 inch(8.25 mm)",
            showDetails: showProDetails,
            setShowDetails: setShowProDetails

        },
        {
            id: 'iphone15',
            image: iphone15,
            title: 'iPhone 15',
            description: "Black, Blue, Green, Yellow, Pink \nAluminum design Ceramic Shield front Color-infused glass back.\n Capacity:\n128GB \n256GB\n 512GB\nSize and Weight:\n Weight: 6.02 ounces (171 grams)\nHeight:5.81 inches(147.6 mm)\nWidth:2.82 inches (71.6 mm)\nDepth:0.31 inch(7.80 mm)",
            showDetails: showIphone15Details,
            setShowDetails: setShowIphone15Details
        },
        {
            id: 'iphone15promax',
            image: iphoneProMaxImage,
            title: 'iPhone 15 Pro Max',
            description: "Black Titanium, White Titanium, Blue Titanium, Natural Titanium\nTitanium design Ceramic Shield front Textured matte glass back.\n\n Capacity:\n256GB\n 512GB\n1TB \nSize and Weight:\n Weight: 7.81 ounces (221 grams)\nHeight:6.29 inches(159.9 mm)\nWidth:3.02 inches (76.7 mm)\nDepth:0.32 inch(8.25 mm)",
            showDetails: showProMaxDetails,
            setShowDetails: setShowProMaxDetails
        }
    ];

    return (
        <div className="apple-page">
            <div className="logo-container" style={{ opacity }}>
                <img src={applelogo} alt="Apple Logo" className="apple-logo" />
            </div>
            <div className="products-container">
                {phones.map(phone => (
                    <div key={phone.id} className={`${phone.id}-container`}>
                        <img src={phone.image} alt={phone.title} className={`${phone.id}-image`} />
                        <h2>{phone.title}</h2>
                        <button onClick={() => phone.setShowDetails(!phone.showDetails)} className="details-button">
                            {phone.showDetails ? 'Less Details' : 'More Details'}
                        </button>
                        {phone.showDetails && (
                            <div className={`${phone.id}-description`}>
                                {renderDescription(phone.description)}
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Apple;
