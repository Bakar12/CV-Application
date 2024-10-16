import React, { useState } from 'react';
import Navbar from './Navbar';
import GeneralInfo from './GeneralInfo';
import EducationalExperience from './EducationalExperience';
import PracticalExperience from './PracticalExperience';
import Skills from './Skills';
import Languages from './Languages';
import Hobbies from './Hobbies';
import References from './References';
import '../styles/CVForm.css';

const CVForm = () => {
    const [currentSection, setCurrentSection] = useState('general');

    const renderSection = () => {
        switch (currentSection) {
            case 'general':
                return <GeneralInfo />;
            case 'education':
                return <EducationalExperience />;
            case 'experience':
                return <PracticalExperience />;
            case 'skills':
                return <Skills />;
            case 'languages':
                return <Languages />;
            case 'hobbies':
                return <Hobbies />;
            case 'references':
                return <References />;
            default:
                return <GeneralInfo />;
        }
    };

    return (
        <div className="cv-form">
            <h1>CV Form</h1>
            <Navbar onSectionChange={setCurrentSection} />
            <div className="form-section">
                {renderSection()}
            </div>
        </div>
    );
};

export default CVForm;
