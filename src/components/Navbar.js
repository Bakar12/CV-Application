import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ onSectionChange }) => {
    return (
        <nav className="navbar">
            <ul>
                <li onClick={() => onSectionChange('general')}>General Info</li>
                <li onClick={() => onSectionChange('education')}>Education</li>
                <li onClick={() => onSectionChange('experience')}>Experience</li>
                <li onClick={() => onSectionChange('skills')}>Skills</li>
                <li onClick={() => onSectionChange('languages')}>Languages</li>
                <li onClick={() => onSectionChange('hobbies')}>Hobbies</li>
                <li onClick={() => onSectionChange('references')}>References</li>
            </ul>
        </nav>
    );
};

export default Navbar;
