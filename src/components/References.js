import React, { useState } from 'react';
import '../styles/References.css';

const References = () => {
    // State variable to store the references
    const [references, setReferences] = useState('');

    // Event handler for input change
    const handleChange = (e) => {
        setReferences(e.target.value);
    };

    return (
        <div className="references">
            {/* Input field to add references */}
            <input
                type="text"
                value={references}
                onChange={handleChange}
                placeholder="Add references"
            />
        </div>
    );
};

export default References;
