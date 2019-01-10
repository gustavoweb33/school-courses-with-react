import React from 'react';
import CourseCard from './CoursesCard'

const DisplayCourses = (props) => {
    const coursesArray = [];
    //console.log(props.newCourses[1].creditHours)
    for (let i = 0; i < props.newCourses.length; i++) {
        coursesArray.push(props.newCourses[i].courseId)
    }

    return (
        <div>
            {
                coursesArray.map((course, i) => {
                    return <CourseCard key={i} enrollment={course} checkCheckbox={props.checkCheckbox} />
                })
            }
          
        </div>
    );
}

export default DisplayCourses; 