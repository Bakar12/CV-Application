import React, { useState } from 'react';
import '../styles/PracticalExperience.css';

const PracticalExperience = () => {
    // State variables for editing mode and experience details
    const [isEditing, setIsEditing] = useState(true);
    const [experience, setExperience] = useState({ company: '', position: '', responsibilities: '', dateFrom: '', dateTo: '' });

    // Event handler for input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperience({ ...experience, [name]: value });
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
        <div className="practical-experience">
            {isEditing ? (
                // Render form inputs in editing mode
                <div>
                    <input name="company" value={experience.company} onChange={handleChange} placeholder="Company Name" />
                    <input name="position" value={experience.position} onChange={handleChange} placeholder="Position Title" />
                    <input name="responsibilities" value={experience.responsibilities} onChange={handleChange} placeholder="Main Responsibilities" />
                    <input name="dateFrom" value={experience.dateFrom} onChange={handleChange} placeholder="Date From" />
                    <input name="dateTo" value={experience.dateTo} onChange={handleChange} placeholder="Date To" />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            ) : (
                // Render experience details in non-editing mode
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