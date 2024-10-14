import React, { useState } from 'react';
import '../styles/GeneralInfo.css';

const GeneralInfo = () => {
    // State variables for editing mode and form data
    const [isEditing, setIsEditing] = useState(true);
    const [info, setInfo] = useState({ name: '', email: '', phone: '' });

    // Event handler for input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    };

    // Event handler for form submission
    const handleSubmit = () => {
        setIsEditing(false);
    };

    // Event handler for edit button click
    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <div className="general-info">
            {isEditing ? (
                // Render form inputs in editing mode
                <div>
                    <input name="name" value={info.name} onChange={handleChange} placeholder="Name" />
                    <input name="email" value={info.email} onChange={handleChange} placeholder="Email" />
                    <input name="phone" value={info.phone} onChange={handleChange} placeholder="Phone" />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            ) : (
                // Render static text in non-editing mode
                <div>
                    <p>Name: {info.name}</p>
                    <p>Email: {info.email}</p>
                    <p>Phone: {info.phone}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default GeneralInfo;