import React from 'react';
import { Link } from 'react-router-dom';
import './BrandsStyle.css';

const BrandsPage = () => {
    const brands = ["Apple", "Samsung", "Huawei", "Siemens", "LG", "Bosch", "Sony", "Philips", "Toshiba", "JBL"];

    // Simple slugify function
    const slugify = (text) => {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    };

    if (!brands.length) {
        return <div>No brands available.</div>;
    }

    return (
        <div>
            <h2>Brands</h2>
            <ul className="brand-list">
                {brands.map((brand) => (
                    <li key={brand} className="brand-list-item">
                        <Link to={`/brands/${slugify(brand)}`} className="brand-link">
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
