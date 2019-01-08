import React from 'react';
import '../containers/SemesterTables.css';

const SemesterTables = (props) => {
    const userChosenSemester = props.semesterValue;
    const userChosenCourses = props.chosenCourses;

    return (
        <div className='grid-container'>
            <div>
                <h3>Smester:  {userChosenSemester}</h3>

                {
                    userChosenCourses.map(course => <li key={course}> {course}</li>)
                }

            </div>
        </div>
    );
}

export default SemesterTables;