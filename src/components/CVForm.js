import React from 'react';
import GeneralInfo from './GeneralInfo';
import EducationalExperience from './EducationalExperience';
import PracticalExperience from './PracticalExperience';
import '../styles/CVForm.css';

// Define the CVForm component
const CVForm = () => {
    return (
        <div className="cv-form">
            <h1>CV Form</h1>
            {/* Render the GeneralInfo component */}
            <GeneralInfo />
            {/* Render the EducationalExperience component */}
            <EducationalExperience />
            {/* Render the PracticalExperience component */}
            <PracticalExperience />
        </div>
    );
};

// Export the CVForm component as the default export
export default CVForm;
