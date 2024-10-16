import React, { useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
    const [skills, setSkills] = useState('');

    const handleChange = (e) => {
        setSkills(e.target.value);
    };

    return (
        <div className="skills">
            <input 
                type="text" 
                value={skills} 
                onChange={handleChange} 
                placeholder="Add your skills here" 
            />
        </div>
    );
};

export default Skills;
