import React, { useState, useEffect } from 'react';
import '../styles/EducationalExperience.css';

const EducationalExperience = ({ onChange }) => {
    const [educationList, setEducationList] = useState([
        { school: '', title: '', date: '', points: [''] }
    ]);

    const handleChange = (index, field, value) => {
        const newEducationList = [...educationList];
        newEducationList[index][field] = value;
        setEducationList(newEducationList);
    };

    const handlePointChange = (eduIndex, pointIndex, value) => {
        const newEducationList = [...educationList];
        newEducationList[eduIndex].points[pointIndex] = value;
        setEducationList(newEducationList);
    };

    const addNewPoint = (eduIndex) => {
        const newEducationList = [...educationList];
        newEducationList[eduIndex].points.push('');
        setEducationList(newEducationList);
    };

    const addNewEducation = () => {
        setEducationList([...educationList, { school: '', title: '', date: '', points: [''] }]);
    };

    useEffect(() => {
        onChange(educationList);  // Pass the updated list back to CVForm
    }, [educationList, onChange]);

    return (
        <div className="educational-experience">
            <h2>Educational Experience</h2>
            {educationList.map((education, eduIndex) => (
                <div key={eduIndex} className="education-entry">
                    <input
                        type="text"
                        value={education.school}
                        onChange={(e) => handleChange(eduIndex, 'school', e.target.value)}
                        placeholder="School Name"
                    />
                    <input
                        type="text"
                        value={education.title}
                        onChange={(e) => handleChange(eduIndex, 'title', e.target.value)}
                        placeholder="Title of Study"
                    />
                    <input
                        type="text"
                        value={education.date}
                        onChange={(e) => handleChange(eduIndex, 'date', e.target.value)}
                        placeholder="Date of Study"
                    />

                    <h3>Details:</h3>
                    {education.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="point-entry">
                            <textarea
                                value={point}
                                onChange={(e) => handlePointChange(eduIndex, pointIndex, e.target.value)}
                                placeholder="Detail or Achievement"
                            />
                        </div>
                    ))}
                    <button onClick={() => addNewPoint(eduIndex)}>Add Another Detail</button>
                </div>
            ))}
            <button onClick={addNewEducation}>Add Another Education</button>
        </div>
    );
};

export default EducationalExperience;
