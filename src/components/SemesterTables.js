import React from 'react';
import '../containers/SemesterTables.css';

const SemesterTables = () => {
    return (
        <div className='grid-container'>
            <div>
                <h3>Semester One</h3>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                </ul>
            </div>
            <div>
                <h3>Semester Two</h3>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                </ul>
            </div>
            <div>
                <h3>Semester Three</h3>
            </div>
            <div>
                <h3>Semester Four</h3>
            </div>
        </div>
    );
}

export default SemesterTables;