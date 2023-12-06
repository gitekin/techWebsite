import React, { useState, useEffect } from 'react';
import './SamsungStyle.css';
import samsungLogo from '../images/samsunglogo.png';
import galaxyZFlip from '../images/galaxyZFlip.png';
import galaxyNote20 from '../images/galaxyNote20.png';
import galaxyS23Plus from '../images/galaxy23.png';

const Samsung = () => {
    const [opacity, setOpacity] = useState(1);
    const [showGalaxyZFlipDetails, setShowGalaxyZFlipDetails] = useState(false);
    const [showGalaxyNote20Details, setShowGalaxyNote20Details] = useState(false);
    const [showGalaxyS23PlusDetails, setShowGalaxyS23PlusDetails] = useState(false);

    const handleScroll = () => {
        const newOpacity = Math.max(0.5, 1 - window.scrollY / 500);
        setOpacity(newOpacity);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handlePayment = (phoneId) => {
        alert(`Payment process for ${phoneId} would start here.`);
    };

    const renderDescription = (description) => {
        return description.split('\n').map((line, index) => (
            <p key={index} className="samsung-description-line">{line}</p>
        ));
    };

    const phones = [
        {
            id: 'galaxyZFlip',
            image: galaxyZFlip,
            title: 'Galaxy ZFlip',
            description: "Black Titanium, White Titanium, ...",
            showDetails: showGalaxyZFlipDetails,
            setShowDetails: setShowGalaxyZFlipDetails,
            handlePayment: () => handlePayment('galaxyZFlip')
        },
        {
            id: 'galaxyNote20',
            image: galaxyNote20,
            title: 'Galaxy Note 20',
            description: "Black, Blue, Green, Yellow, Pink ...",
            showDetails: showGalaxyNote20Details,
            setShowDetails: setShowGalaxyNote20Details,
            handlePayment: () => handlePayment('galaxyNote20')
        },
        {
            id: 'galaxyS23Plus',
            image: galaxyS23Plus,
            title: 'Galaxy S23 Plus',
            description: "Black Titanium, White Titanium, ...",
            showDetails: showGalaxyS23PlusDetails,
            setShowDetails: setShowGalaxyS23PlusDetails,
            handlePayment: () => handlePayment('galaxyS23Plus')
        }
    ];

    return (
        <div className="samsung-page">
            <div className="logo-container" style={{ opacity }}>
                <img src={samsungLogo} alt="Samsung Logo" className="samsung-logo" />
            </div>

            <div className="products-container">
                {phones.map((phone) => (
                    <div key={phone.id} className={`samsung-container ${phone.id}-container`}>
                        <img
                            src={phone.image}
                            alt={phone.title}
                            className={`samsung-image ${phone.id}-image`}
                        />
                        <h2>{phone.title}</h2>
                        <button onClick={() => phone.setShowDetails(!phone.showDetails)} className="details-button">
                            {phone.showDetails ? 'Less Details' : 'More Details'}
                        </button>
                        {phone.showDetails && (
                            <div className="samsung-description">
                                {renderDescription(phone.description)}
                            </div>
                        )}
                        <button onClick={phone.handlePayment} className="pay-button">
                            Pay Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Samsung;
