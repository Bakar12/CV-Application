import React, { useState } from 'react';
import '../styles/EducationalExperience.css';

const EducationalExperience = () => {
    const [isEditing, setIsEditing] = useState(true);
    const [education, setEducation] = useState({ school: '', title: '', date: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation({ ...education, [name]: value });
    };

    const handleSubmit = () => {
        if (!education.school || !education.title || !education.date) {
            alert('All fields must be filled out');
            return;
        }
        setIsEditing(false);
    };

    const handleEdit = () => setIsEditing(true);

    return (
        <div className="educational-experience">
            {isEditing ? (
                <div>
                    <input name="school" value={education.school} onChange={handleChange} placeholder="School Name" />
                    <input name="title" value={education.title} onChange={handleChange} placeholder="Title of Study" />
                    <input name="date" value={education.date} onChange={handleChange} placeholder="Date of Study" />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            ) : (
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
