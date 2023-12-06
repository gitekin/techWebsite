import React from 'react';
import './HomeStyle.css';
import myPhoto from '../images/myPhoto.jpg';
import mySamsung from '../images/mySamsung.jpg';
import Huaweip60pro from '../images/Huaweip60pro.jpg';
import Googelpixel8pro from '../images/Googelpixel8pro.jpg';
import VivoX100Pro from '../images/VivoX100Pro.png';

function Home() {
    return (
        <>
            <div className="home-page" style={{ paddingTop: '350px' }}>
            </div>
            <div className="product-container myPhoto-container">
                <img src={myPhoto} alt="Iphone15 pro max" className="myPhoto-image" />
                <div className="myPhoto-overlay-text">iPhone 15 Pro</div>
                <a href="http://localhost:5173/brands/apple" className="myPhoto-product-link">Learn more</a>
            </div>

            <div className="right-section">
                <div className="product-container mySamsung-container">
                    <img src={mySamsung} alt="Galaxy Z Flip5" className="mySamsung-image" />
                    <div className="mySamsung-overlay-text">SAMSUNG Galaxy Z Flip5</div>
                    <a href="http://localhost:5173/brands/samsung" className="mySamsung-product-link">Learn more</a>
                </div>


                <div className="product-container Huaweip60pro-container">
                    <img src={Huaweip60pro} alt="P60 Pro" className="Huaweip60pro-image" />
                    <div className="Huaweip60pro-overlay-text">HUAWEI P60 Pro</div>
                    <a href="http://localhost:5173/brands/huawei" className="Huaweip60pro-product-link">Learn more</a>
                </div>


                <div className="product-container Googelpixel8pro-container">
                    <img src={Googelpixel8pro} alt="Googel Pixel 8 pro" className="Googelpixel8pro-image" />
                    <div className="Googelpixel8pro-overlay-text">Googel Pixel 8 pro</div>
                    <a href="http://localhost:5173/brands/googel" className="Googelpixel8pro-product-link">Learn more</a>
                </div>


                <div className="product-container VivoX100Pro-container">
                    <img src={VivoX100Pro} alt="Vivo X100 Pro" className="VivoX100Pro-image" />
                    <div className="VivoX100Pro-overlay-text"> Vivo X100 Pro</div>
                    <a href="http://localhost:5173/brands/vivo" className="VivoX100Pro-product-link">Learn more</a>
                </div>

            </div>
        </>
    );
}

export default Home;
