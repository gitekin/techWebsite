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
            title: 'Galaxy Z Flip',
            description: "Colors: Mirror Black, Mirror Purple, Mirror Gold\nInnovative Foldable Glass Display: 6.7-inch FHD+ Dynamic AMOLED Display (2636x1080)\nCover Display: 1.1-inch Super AMOLED Display (300x112)\n\nCapacity:\n128GB\n256GB\n\nSize and Weight:\n Weight: 183 grams\nDimensions (Folded): 87.4 x 73.6 x 17.3 mm\nDimensions (Unfolded): 167.3 x 73.6 x 7.2 mm\n\nPerformance:\nSnapdragon 855+ Processor\n8GB RAM\n\nBattery Life:\n3300mAh Dual battery\nFast Charging & Wireless PowerShare\n\nCamera:\n12MP Ultra-wide Rear Camera\n12MP Wide-angle Rear Camera\n10MP Front Camera\n\nPrice:\n128GB: $1,380\n256GB: $1,449",
            showDetails: showGalaxyZFlipDetails,
            setShowDetails: setShowGalaxyZFlipDetails,
            handlePayment: () => handlePayment('galaxyZFlip')
        },
        {
            id: 'galaxyNote20',
            image: galaxyNote20,
            title: 'Galaxy Note 20',
            description: "Colors: Mystic Bronze, Mystic Green, Mystic Gray\nDisplay: 6.7-inch Flat FHD+ Super AMOLED Plus Infinity-O Display (2400x1080)\nS Pen: Improved latency for more natural writing experience\n\nCapacity:\n128GB internal storage\nExpandable memory available via microSD card\n\nSize and Weight:\nWeight: 192 grams\nDimensions: 161.6 x 75.2 x 8.3 mm\n\nPerformance:\nExynos 990 (Global) / Snapdragon 865+ (USA)\n8GB RAM\n\nBattery Life:\n4300mAh (typical) battery\nSuper Fast Charging, Fast Wireless Charging & Wireless PowerShare\n\nCamera System:\nTriple rear cameras: 12MP Ultra-wide, 12MP Wide-angle, 64MP Telephoto\nFront Camera: 10MP Selfie Camera\nSpace Zoom: 3x Hybrid Optic Zoom, Up to 30x Super Resolution Zoom\n\nOther Features:\nIP68 water and dust resistance\nStereo speakers and Dolby Atmos\nSamsung DeX support\n\nPrice:\n128GB: $999",
            showDetails: showGalaxyNote20Details,
            setShowDetails: setShowGalaxyNote20Details,
            handlePayment: () => handlePayment('galaxyNote20')
        },
        {
            id: 'galaxyS23Plus',
            image: galaxyS23Plus,
            title: 'Galaxy S23 Plus',
            description: "Colors: Phantom Black, Phantom Silver, Phantom Violet\nDisplay: Dynamic AMOLED 2X, 120Hz refresh rate, HDR10+\nScreen Size: 6.7 inches Full HD+ (2400 x 1080 pixels)\n\nCapacity:\n256GB internal storage\nUFS 3.1\n\nSize and Weight:\nWeight: Approximately 195 grams\nDimensions: 161.5 x 75.6 x 7.8 mm\n\nPerformance:\nLatest Qualcomm Snapdragon (Year of Release) or Exynos (region-specific) chipset\n12GB RAM\n\nBattery Life:\n4800mAh (typical) with 25W Super Fast Charging\n15W Fast Wireless Charging & 4.5W Reverse Wireless Charging\n\nCamera System:\nTriple rear cameras: Main Wide, Ultra-Wide, Telephoto with High Resolution\nFront Camera: High Megapixel Count with Auto-Focus\nProfessional Video Capabilities: 8K recording and enhanced Pro Video mode\n\nOther Features:\nIP68 water and dust resistance\nStereo speakers tuned by AKG\n5G Connectivity, Wi-Fi 6, Bluetooth 5.x\nUltrasonic in-display fingerprint sensor\nSamsung DeX support, Wireless DeX\n\nPrice:\n256GB: Starting from $1,199 (Prices vary by region and promotions)",
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
