import React, { useState } from 'react';
import '../styles/Hobbies.css';

const Hobbies = () => {
    // Define a state variable called 'hobbies' and a function to update it called 'setHobbies'
    const [hobbies, setHobbies] = useState('');

    // Event handler function that updates the 'hobbies' state variable when the input value changes
    const handleChange = (e) => {
        setHobbies(e.target.value);
    };

    // Render the component
    return (
        <div className="hobbies">
            {/* Input field that displays the value of the 'hobbies' state variable */}
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
