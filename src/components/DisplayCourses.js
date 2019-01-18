import React from 'react';
import CourseCard from './CoursesCard';
import style from '../containers/CourseCard.module.css';


const DisplayCourses = (props) => {
    const coursesArray = [];
   
    for (let i = 0; i < props.newCourses.length; i++) {
        coursesArray.push(props.newCourses[i].courseId)
    }

    return (
        <div className={[style.grid, style.gridTemplate].join(' ')}>
            {
                coursesArray.map((course, i) => {
                    return <CourseCard 
                    key={i} 
                    course={course} 
                    checkCheckbox={props.checkCheckbox}/>
                })
            }
          
        </div>
    );
}

export default DisplayCourses; 