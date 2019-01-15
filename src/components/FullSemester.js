import React from 'react';
import { globalFilteredCourses } from './SemesterTables';

const FullSemesterTable = (props) => {



    return (
        <div>
            <h2>Complete Semester</h2>
            {
                globalFilteredCourses.map(course => {
                    return (
                        <div key={course.courseId}>
                            <p>{course.courseId}: {course.description}</p>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default FullSemesterTable;