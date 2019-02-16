import React from 'react';
import CourseCard from './CoursesCard';
import style from '../containers/DisplayCourses.module.css';



const DisplayCourses = ({newCourses, checkCheckbox}) => {
    const coursesArray = [];
   
    for (let i = 0; i < newCourses.length; i++) {
        coursesArray.push(newCourses[i].courseId)
    }

    return (
        <div className={[style.grid, style.gridTemplate].join(' ')}>
            {
                coursesArray.map((course, i) => {
                    return <CourseCard 
                    key={i} 
                    course={course} 
                    checkCheckbox={checkCheckbox}/>
                })
            }
          
        </div>
    );
}

export default DisplayCourses; 