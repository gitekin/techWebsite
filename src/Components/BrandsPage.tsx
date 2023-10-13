import React from 'react';
import { Link } from 'react-router-dom';
import './BrandsStyle.css';

const BrandsPage = () => {
    const brands = ["Apple", "Samsung", "Siemens", "LG", "Bosch", "Sony", "Philips"];

    return (
        <div>
            <h2>Brands</h2>
            <ul className="brand-list">
                {brands.map((brand, index) => (
                    <li key={index} className="brand-list-item">
                        <Link to={`/brands/${brand.toLowerCase()}`} className="brand-link">
                            {brand}
                            <div className="brand-details">
                                {/* Add brand details here */}
                                Details for {brand}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrandsPage;
