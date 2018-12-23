import React from 'react';
import CourseCard from './CoursesCard'

const DisplayCourses = (props) => {
    const coursesArray = [];
    for (let i = 0; i < props.newCourses.length; i++) {
        coursesArray.push(props.newCourses[i].course_id)
        // console.log(props.newCourses[i].course_id);
    }

    return (
        <div>
            {
                coursesArray.map((course, i) => {
                    return <CourseCard key={i} enrollment={course} />
                })
            }

        </div>
    );
}

export default DisplayCourses; 