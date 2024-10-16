import React, { useState } from 'react';
import '../styles/References.css';

const References = () => {
    const [references, setReferences] = useState('');

    const handleChange = (e) => {
        setReferences(e.target.value);
    };

    return (
        <div className="references">
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
