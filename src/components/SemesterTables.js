import React from 'react';
import '../containers/SemesterTables.css';
//import courses from '../courses';

const SemesterTables = (props) => {
    //console.log(props.courses)
    const userChosenSemester = props.semesterValue;
    const userChosenCourses = props.chosenCourses;
    let totalCreditHours = 0;

    const filteredCourses = [];
    for (let i = 0; i < props.courses.length; i++) {
        if (userChosenCourses.includes(props.courses[i].courseId)) {
            filteredCourses.push(props.courses[i])
        }
    }

   

    filteredCourses.forEach(course => totalCreditHours += course.creditHours)
    
    if(totalCreditHours >= 27) {
        alert('You have exceded to maximum number of hours')
    }

    return (
        <div className='grid-container'>
            <div>
                <h3>Smester:  {userChosenSemester}</h3>

                {/*
                    userChosenCourses.map((course, index) => {
                        return (
                            <div key={index}>
                                <li key={course}> {course}</li>
                                <button value={course} onClick={props.deleteCourse}>Delete</button>
                            </div>
                        )
                    })
               */}
                <div>
                    {
                        filteredCourses.map((course, index) => {

                            return (
                                <div key={index}>
                                    <li key={course.courseId}> {course.courseId} ({course.creditHours})</li>
                                    <button value={course.courseId} onClick={props.deleteCourse}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
                <h3>Total Credit Hours: {totalCreditHours}</h3>

            </div>
        </div>
    );
}

export default SemesterTables;