import React, { useState } from 'react';
import './ContactUsStyle.css'; // Make sure you have this CSS file for styling

function ContactUs() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement your form submission logic here
        console.log(formData);
        // You might want to send the form data to a server or email service
    };

    return (
        <div className="contact-us-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </div>
    );
}

export default ContactUs;
