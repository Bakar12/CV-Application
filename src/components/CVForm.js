import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { useState } from 'react'; 
import GeneralInfo from './GeneralInfo';
import EducationalExperience from './EducationalExperience';
import PracticalExperience from './PracticalExperience';
import Skills from './Skills';
import Languages from './Languages';
import Hobbies from './Hobbies';
import References from './References';
import '../styles/CVForm.css';

const CVForm = () => {
    const [generalInfo, setGeneralInfo] = useState({
        name: '',
        email: '',
        phone: ''
    });
    
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState('');
    const [languages, setLanguages] = useState('');
    const [hobbies, setHobbies] = useState('');
    const [references, setReferences] = useState('');

    // Generate and Download Word Document
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
                        
                        new Paragraph({
                            text: 'Educational Experience',
                            heading: 'Heading1',
                            break: 1
                        }),
                        ...education.map(edu => new Paragraph(`${edu.school}, ${edu.title}, ${edu.date}`)),

                        new Paragraph({
                            text: 'Practical Experience',
                            heading: 'Heading1',
                            break: 1
                        }),
                        ...experience.map(exp => new Paragraph(`${exp.company}, ${exp.position}, ${exp.dateFrom} - ${exp.dateTo}`)),

                        new Paragraph({
                            text: 'Skills',
                            heading: 'Heading1',
                            break: 1
                        }),
                        new Paragraph(skills),

                        new Paragraph({
                            text: 'Languages',
                            heading: 'Heading1',
                            break: 1
                        }),
                        new Paragraph(languages),

                        new Paragraph({
                            text: 'Hobbies',
                            heading: 'Heading1',
                            break: 1
                        }),
                        new Paragraph(hobbies),

                        new Paragraph({
                            text: 'References',
                            heading: 'Heading1',
                            break: 1
                        }),
                        new Paragraph(references)
                    ]
                }
            ]
        });

        const buffer = await Packer.toBlob(doc);
        saveAs(buffer, 'CV.docx');
    };

    return (
        <div className="cv-form">
            <h1>CV Form</h1>
            <GeneralInfo onChange={setGeneralInfo} />
            <EducationalExperience onChange={setEducation} />
            <PracticalExperience onChange={setExperience} />

            {/* Optional Sections */}
            <Skills onChange={setSkills} />
            <Languages onChange={setLanguages} />
            <Hobbies onChange={setHobbies} />
            <References onChange={setReferences} />

            <button onClick={downloadWordDocument}>Download as Word</button>
        </div>
    );
};

export default CVForm;
