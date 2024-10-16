import React, { useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
    const [skills, setSkills] = useState('');

    const handleChange = (e) => {
        setSkills(e.target.value);
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

