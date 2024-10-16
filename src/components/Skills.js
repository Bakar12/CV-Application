import React, { useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
    const [skills, setSkills] = useState(''); // State to store the skills

    const handleChange = (e) => {
        setSkills(e.target.value); // Update the skills state when the textarea value changes
    };

    return (
        <div className="skills">
            <h2>Skills</h2>
            <textarea
                value={skills}
                onChange={handleChange}
                placeholder="List your skills here"
            />
        </div>
    );
};

export default Skills;
