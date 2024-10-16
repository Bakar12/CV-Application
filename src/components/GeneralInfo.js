import React, { useState } from 'react';
import '../styles/GeneralInfo.css';

const GeneralInfo = () => {
    const [isEditing, setIsEditing] = useState(true);
    const [info, setInfo] = useState({ name: '', email: '', phone: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    };

    const handleSubmit = () => {
        if (!info.name || !info.email || !info.phone) {
            alert('All fields must be filled out');
            return;
        }
        setIsEditing(false);
    };

    const handleEdit = () => setIsEditing(true);

    return (
        <div className="general-info">
            {isEditing ? (
                <div>
                    <input name="name" value={info.name} onChange={handleChange} placeholder="Name" />
                    <input name="email" value={info.email} onChange={handleChange} placeholder="Email" />
                    <input name="phone" value={info.phone} onChange={handleChange} placeholder="Phone" />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            ) : (
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
