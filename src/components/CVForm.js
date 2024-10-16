import React from 'react';
import GeneralInfo from './GeneralInfo';
import EducationalExperience from './EducationalExperience';
import PracticalExperience from './PracticalExperience';
import '../styles/CVForm.css';

const CVForm = () => {
    return (
        <div className="cv-form">
            <h1>CV Form</h1>
            <GeneralInfo />
            <EducationalExperience />
            <PracticalExperience />
        </div>
    );
};

export default CVForm;
