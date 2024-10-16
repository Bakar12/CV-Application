import React, { useState, useEffect } from 'react';
import '../styles/GeneralInfo.css';

const GeneralInfo = ({ onChange }) => {
    const [info, setInfo] = useState({ name: '', email: '', phone: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    };

    useEffect(() => {
        onChange(info);  // Pass the updated info back to CVForm
    }, [info, onChange]);

    return (
        <div className="general-info">
            <h2>General Information</h2>
            <input
                type="text"
                name="name"
                value={info.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                value={info.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="text"
                name="phone"
                value={info.phone}
                onChange={handleChange}
                placeholder="Phone"
            />
        </div>
    );
};

export default GeneralInfo;
