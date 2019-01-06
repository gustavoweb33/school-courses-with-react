import React from 'react';
import '../containers/SemesterTables.css';


const SemesterTables = (props) => {
    let userChosenSemester = props.semesterValue;
    const userChosenCourses = props.chosenCourses;
    console.log(userChosenCourses);
    return (
        <div className='grid-container'>
            <div>
                <h3>Smester:  {userChosenSemester}</h3>
                
                    {
                        userChosenCourses.map(course => {
                            return <li key={course}>{course}</li>
                        })
                    }
               
            </div>
        </div>
    );
}

export default SemesterTables;