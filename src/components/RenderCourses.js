import React from 'react';
import CourseCard from './CoursesCard';
import style from '../containers/RenderCourses.module.css';

const RenderCourses = ({ displayCourses, checkCheckbox }) => {
    const courses = [];
    for(let i = 0; i < displayCourses.length; i++) {
        courses.push(displayCourses[i].courseId)
    }
   

    return (
        <div className={style.grid}>
            {courses.map(course => {
                return <CourseCard 
                    key={course}
                    course={course}
                    checkCheckbox={checkCheckbox}
                />
            })}
        </div>
    )
}

export default RenderCourses;