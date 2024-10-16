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
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

const CVForm = () => {
    const [currentSection, setCurrentSection] = useState('general');

    const [generalInfo, setGeneralInfo] = useState({ name: '', email: '', phone: '' });
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState('');
    const [languages, setLanguages] = useState('');
    const [hobbies, setHobbies] = useState('');
    const [references, setReferences] = useState('');

    // Export CV as a Word document
    const downloadWordDocument = async () => {
        const doc = new Document({
            sections: [
                {
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Curriculum Vitae",
                                    bold: true,
                                    size: 28,
                                    break: 2
                                })
                            ]
                        }),
                        new Paragraph(`Name: ${generalInfo.name}`),
                        new Paragraph(`Email: ${generalInfo.email}`),
                        new Paragraph(`Phone: ${generalInfo.phone}`),

                        new Paragraph({ text: 'Educational Experience', heading: 'Heading1' }),
                        ...education.map(edu => new Paragraph(`${edu.school}, ${edu.title}, ${edu.date}`)),

                        new Paragraph({ text: 'Practical Experience', heading: 'Heading1' }),
                        ...experience.map(exp => new Paragraph(`${exp.company}, ${exp.position}, ${exp.dateFrom} - ${exp.dateTo}`)),

                        new Paragraph({ text: 'Skills', heading: 'Heading1' }),
                        new Paragraph(skills),

                        new Paragraph({ text: 'Languages', heading: 'Heading1' }),
                        new Paragraph(languages),

                        new Paragraph({ text: 'Hobbies', heading: 'Heading1' }),
                        new Paragraph(hobbies),

                        new Paragraph({ text: 'References', heading: 'Heading1' }),
                        new Paragraph(references)
                    ]
                }
            ]
        });

        const buffer = await Packer.toBlob(doc);
        saveAs(buffer, 'CV.docx');
    };

    const renderSection = () => {
        switch (currentSection) {
            case 'general':
                return <GeneralInfo onChange={setGeneralInfo} />;
            case 'education':
                return <EducationalExperience onChange={setEducation} />;
            case 'experience':
                return <PracticalExperience onChange={setExperience} />;
            case 'skills':
                return <Skills onChange={setSkills} />;
            case 'languages':
                return <Languages onChange={setLanguages} />;
            case 'hobbies':
                return <Hobbies onChange={setHobbies} />;
            case 'references':
                return <References onChange={setReferences} />;
            default:
                return <GeneralInfo onChange={setGeneralInfo} />;
        }
    };

    return (
        <div className="cv-form">
            <h1>CV Form</h1>
            <Navbar onSectionChange={setCurrentSection} />
            <div className="form-section">
                {renderSection()}
            </div>
            <button onClick={downloadWordDocument} className="export-button">
                Download as Word Document
            </button>
        </div>
    );
};

export default CVForm;
