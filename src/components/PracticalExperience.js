import React, { useState, useEffect } from 'react';
import '../styles/PracticalExperience.css';

const PracticalExperience = ({ onChange }) => {
    const [experienceList, setExperienceList] = useState([
        { company: '', position: '', dateFrom: '', dateTo: '', points: [''] }
    ]);

    const handleChange = (index, field, value) => {
        const newExperienceList = [...experienceList];
        newExperienceList[index][field] = value;
        setExperienceList(newExperienceList);
    };

    const handlePointChange = (expIndex, pointIndex, value) => {
        const newExperienceList = [...experienceList];
        newExperienceList[expIndex].points[pointIndex] = value;
        setExperienceList(newExperienceList);
    };

    const addNewPoint = (expIndex) => {
        const newExperienceList = [...experienceList];
        newExperienceList[expIndex].points.push('');
        setExperienceList(newExperienceList);
    };

    const addNewExperience = () => {
        setExperienceList([...experienceList, { company: '', position: '', dateFrom: '', dateTo: '', points: [''] }]);
    };

    useEffect(() => {
        onChange(experienceList);  // Pass the updated list back to CVForm
    }, [experienceList, onChange]);

    return (
        <div className="practical-experience">
            <h2>Practical Experience</h2>
            {experienceList.map((experience, expIndex) => (
                <div key={expIndex} className="experience-entry">
                    <input
                        type="text"
                        value={experience.company}
                        onChange={(e) => handleChange(expIndex, 'company', e.target.value)}
                        placeholder="Company Name"
                    />
                    <input
                        type="text"
                        value={experience.position}
                        onChange={(e) => handleChange(expIndex, 'position', e.target.value)}
                        placeholder="Position Title"
                    />
                    <input
                        type="text"
                        value={experience.dateFrom}
                        onChange={(e) => handleChange(expIndex, 'dateFrom', e.target.value)}
                        placeholder="Date From"
                    />
                    <input
                        type="text"
                        value={experience.dateTo}
                        onChange={(e) => handleChange(expIndex, 'dateTo', e.target.value)}
                        placeholder="Date To"
                    />

                    <h3>Responsibilities:</h3>
                    {experience.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="point-entry">
                            <textarea
                                value={point}
                                onChange={(e) => handlePointChange(expIndex, pointIndex, e.target.value)}
                                placeholder="Responsibility or Task"
                            />
                        </div>
                    ))}
                    <button onClick={() => addNewPoint(expIndex)}>Add Another Responsibility</button>
                </div>
            ))}
            <button onClick={addNewExperience}>Add Another Experience</button>
        </div>
    );
};

export default PracticalExperience;

