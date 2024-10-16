import React, { useState } from 'react';
import '../styles/Languages.css';

const Languages = () => {
    const [languages, setLanguages] = useState('');

    const handleChange = (e) => {
        setLanguages(e.target.value);
    };

    return (
        <div className="languages">
            <input
                type="text"
                value={languages}
                onChange={handleChange}
                placeholder="Add languages"
            />
        </div>
    );
};

export default Languages;
