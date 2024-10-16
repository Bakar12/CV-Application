import React, { useState } from 'react';
import '../styles/Hobbies.css';

const Hobbies = () => {
    const [hobbies, setHobbies] = useState('');

    const handleChange = (e) => {
        setHobbies(e.target.value);
    };

    return (
        <div className="hobbies">
            <input
                type="text"
                value={hobbies}
                onChange={handleChange}
                placeholder="Add hobbies"
            />
        </div>
    );
};

export default Hobbies;
