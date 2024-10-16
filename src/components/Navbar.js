import React from 'react';
import '../styles/Navbar.css';

// Navbar component that takes a prop onSectionChange
const Navbar = ({ onSectionChange }) => {
    return (
        <nav className="navbar">
            <ul>
                {/* Each list item is a clickable element that calls the onSectionChange function with a specific section */}
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
