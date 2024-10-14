import React, { useState } from 'react';
import '../styles/EducationalExperience.css';

const EducationalExperience = () => {
    // State variables
    const [isEditing, setIsEditing] = useState(true);
    const [education, setEducation] = useState({ school: '', title: '', date: '' });

    // Event handler for input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation({ ...education, [name]: value });
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
        <div className="educational-experience">
            {isEditing ? (
                // Render form inputs when editing
                <div>
                    <input name="school" value={education.school} onChange={handleChange} placeholder="School Name" />
                    <input name="title" value={education.title} onChange={handleChange} placeholder="Title of Study" />
                    <input name="date" value={education.date} onChange={handleChange} placeholder="Date of Study" />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            ) : (
                // Render education details when not editing
                <div>
                    <p>School: {education.school}</p>
                    <p>Title: {education.title}</p>
                    <p>Date: {education.date}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default EducationalExperience;