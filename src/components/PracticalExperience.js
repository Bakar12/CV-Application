import React, { useState } from 'react';
import '../styles/PracticalExperience.css';

const PracticalExperience = () => {
    const [isEditing, setIsEditing] = useState(true);
    const [experience, setExperience] = useState({ company: '', position: '', responsibilities: '', dateFrom: '', dateTo: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperience({ ...experience, [name]: value });
    };

    const handleSubmit = () => {
        if (!experience.company || !experience.position || !experience.dateFrom || !experience.dateTo) {
            alert('All fields must be filled out');
            return;
        }
        setIsEditing(false);
    };

    const handleEdit = () => setIsEditing(true);

    return (
        <div className="practical-experience">
            {isEditing ? (
                <div>
                    <input name="company" value={experience.company} onChange={handleChange} placeholder="Company Name" />
                    <input name="position" value={experience.position} onChange={handleChange} placeholder="Position Title" />
                    <input name="responsibilities" value={experience.responsibilities} onChange={handleChange} placeholder="Main Responsibilities" />
                    <input name="dateFrom" value={experience.dateFrom} onChange={handleChange} placeholder="Date From" />
                    <input name="dateTo" value={experience.dateTo} onChange={handleChange} placeholder="Date To" />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            ) : (
                <div>
                    <p>Company: {experience.company}</p>
                    <p>Position: {experience.position}</p>
                    <p>Responsibilities: {experience.responsibilities}</p>
                    <p>Date From: {experience.dateFrom}</p>
                    <p>Date To: {experience.dateTo}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default PracticalExperience;
