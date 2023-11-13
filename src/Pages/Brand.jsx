import React from 'react';
import { Link } from 'react-router-dom';
import './BrandStyle.css';

const Brand = () => {
    const brands = ["Apple", "Samsung", "Huawei", "Google", "LG", "Vivo", "Motorola ", "BlackBerry", "Nokia", "Sony"];

    const slugify = (text) => {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w]+/g, '')
            .replace(/--+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    };

    if (!brands.length) {
        return <div>No brands available.</div>;
    }

    return (
        <div className="brand-container">
            <h2>Brands</h2>
            <ul className="brand-list">
                {brands.map((brand) => (
                    <li key={brand} className="brand-list-item">
                        <Link to={`/brands/${slugify(brand)}`} className="brands-link">
                            {brand}
                            <div className="brands-details">
                                Details for {brand}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Brand;
