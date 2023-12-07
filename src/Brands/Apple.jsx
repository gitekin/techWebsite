import React, { useState, useEffect } from 'react';
import './AppleStyle.css';
import applelogo from '../images/applelogo.png';
import iphoneImage from '../images/Iphone15pro.png';
import iphoneProMaxImage from '../images/Iphone15promax.png';
import iphone15 from '../images/Iphone15.png';
import video1 from '../videos/large_2x (2).mp4';
import iphone14Image from '../images/Iphone14.png';
import iphone15bImage from '../images/iphone15b.png';
import iphone14PlusImage from '../images/Iphone14Plus.png';

const Apple = () => {
    const [opacity, setOpacity] = useState(1);
    const [showProDetails, setShowProDetails] = useState(false);
    const [showProMaxDetails, setShowProMaxDetails] = useState(false);
    const [showIphone15Details, setShowIphone15Details] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [showIphone15b, setShowIphone15b] = useState(false);
    const [showIphone14Details, setShowIphone14Details] = useState(false);
    const [showIphone14PlusDetails, setShowIphone14PlusDetails] = useState(false);



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
            <p key={index} className="iphone-description-line">{line}</p>
        ));
    };

    const toggleVideoModal = () => {
        setShowVideo(!showVideo);
    };


    const toggleIphone15bImage = () => {
        setShowIphone15b(!showIphone15b);
    };

    const toggleDetails = (phone) => {
        const showDetails = phone.showDetails;
        phone.setShowDetails(!showDetails);
    };

    const phones = [
        {
            id: 'iphone15pro',
            image: iphoneImage,
            title: 'iPhone 15 Pro',
            description: "Black Titanium, White Titanium, Blue Titanium, Natural Titanium\nTitanium design Ceramic Shield front Textured matte glass back.\n\n Capacity:\n128GB\n256GB\n 512GB\n1TB \nSize and Weight:\n Weight: 6.60 ounces (187 grams)\nHeight:5.77 inches(146.6 mm)\nWidth:2.78 inches (70.6 mm)\nDepth:0.32 inch(8.25 mm)\n\n Price: \n128GB:999$ \n 256GB:1099$ \n 512GB:1299$ \n 1TB:1499$",
            showDetails: showProDetails,
            setShowDetails: setShowProDetails,
            onImageClick: toggleVideoModal,
            handlePayment: () => handlePayment('iphone15pro')

        },
        {
            id: 'iphone15',
            image: showIphone15b ? iphone15bImage : iphone15,
            title: 'iPhone 15',
            description: "Black, Blue, Green, Yellow, Pink \nAluminum design Ceramic Shield front Color-infused glass back.\n Capacity:\n128GB \n256GB\n 512GB\nSize and Weight:\n Weight: 6.02 ounces (171 grams)\nHeight:5.81 inches(147.6 mm)\nWidth:2.82 inches (71.6 mm)\nDepth:0.31 inch(7.80 mm)\n\n Price: \n 128GB:799$ \n 256GB:899$ \n 512GB:1099$ ",
            showDetails: showIphone15Details,
            setShowDetails: setShowIphone15Details,
            handlePayment: () => handlePayment('iphone15'),
            onImageClick: toggleIphone15bImage
        },
        {
            id: 'iphone15promax',
            image: iphoneProMaxImage,
            title: 'iPhone 15 Pro Max',
            description: "Black Titanium, White Titanium, Blue Titanium, Natural Titanium\nTitanium design Ceramic Shield front Textured matte glass back.\n\n Capacity:\n256GB\n 512GB\n1TB \nSize and Weight:\n Weight: 7.81 ounces (221 grams)\nHeight:6.29 inches(159.9 mm)\nWidth:3.02 inches (76.7 mm)\nDepth:0.32 inch(8.25 mm)\n\n Price: \n 256GB:1199$ \n 512GB:1399$ \n 1TB:1599$",
            showDetails: showProMaxDetails,
            setShowDetails: setShowProMaxDetails,
            handlePayment: () => handlePayment('iphone15promax')
        },

        {
            id: 'iphone14',
            image: iphone14Image,
            title: 'iPhone 14',
            description: "Midnight, Starlight,(PRODUCT)RED, Blue, Purple, Yellow Ceramic Shield front Glass back and aluminum design \n\nCapacity:\n 128GB\n256GB\n 512GB\n Size and Weight:\n Weight: 6.07 ounces (172 grams)\nHeight:5.78 inches(146.7 mm)\nWidth:2.82 inches (71.5 mm)\nDepth:0.31 inch(7.80 mm)\n\n Price: \n 128GB:699$ \n 256GB:799$ \n 512GB:999$ ",
            showDetails: showIphone14Details,
            setShowDetails: setShowIphone14Details,
            handlePayment: () => handlePayment('iphone14'),
            onImageClick: () => setShowIphone14Details(!showIphone14Details)
        },
        {
            id: 'iphone14plus',
            image: iphone14PlusImage,
            title: 'iPhone 14 Plus',
            description: "Midnight, Starlight,(PRODUCT)RED, Blue, Purple, Yellow Ceramic Shield front Glass back and aluminum design  \n\nCapacity:\n 128GB\n256GB\n 512GB\n Size and Weight:\n Weight: 7.16 ounces (203 grams)\nHeight:6.33 inches(160.8 mm)\nWidth:3.07 inches (78.1 mm)\nDepth:0.31 inch(7.80 mm)\n\n Price: \n 128GB:799$ \n 256GB:899$ \n 512GB:1099$ ",
            showDetails: showIphone14PlusDetails,
            setShowDetails: setShowIphone14PlusDetails,
            handlePayment: () => handlePayment('iphone14plus')

        },



    ];


    return (
        <div className="apple-page">
            <div className="logo-container" style={{ opacity }}>
                <img src={applelogo} alt="Apple Logo" className="apple-logo" />
            </div>
            <div className="products-container">
                {phones.map(phone => (
                    <div key={phone.id} className={`iphone-container ${phone.id}-container`}>
                        <img
                            src={phone.image}
                            alt={phone.title}
                            className={`iphone-image ${phone.id}-image`}
                            onClick={phone.onImageClick}
                        />
                        <h2>{phone.title}</h2>
                        <button onClick={() => toggleDetails(phone)} className="details-button">
                            {phone.showDetails ? 'Less Details' : 'More Details'}
                        </button>
                        {phone.showDetails && (
                            <div className="iphone-description">
                                {renderDescription(phone.description)}
                            </div>
                        )}
                        <button onClick={phone.handlePayment} className="pay-button">
                            Pay Now
                        </button>
                    </div>
                ))}
            </div>
            {showVideo && (
                <div className="video-modal">
                    <video src={video1} controls autoPlay />
                    <button onClick={toggleVideoModal}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Apple;