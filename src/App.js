import React from 'react';
import './App.css';
import CVForm from './components/CVForm';

/**
 * The main component of the CV Application.
 * Renders the App component.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
    return (
        <div className="App">
            <CVForm />
        </div>
    );
}

export default App;

