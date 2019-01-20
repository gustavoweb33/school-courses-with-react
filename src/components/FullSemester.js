import React from 'react';
import { globalFilteredCourses } from './SelectedCourses';
import style from '../containers/FullSemester.module.css';

const FullSemesterTable = () => {

    return (
        <div className={style.grid}>
            <h2>Complete Semester</h2>
            {
                globalFilteredCourses.map(course => {
                    return (
                        <div 
                        key={course.courseId} 
                        className={style.border}>
                            <p>{course.courseId}: {course.description} </p>
                            <span>{course.creditHours}</span>
                        </div>
                      
                    )
                })  
            }
        </div>
    )
}

export default FullSemesterTable;